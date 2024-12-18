import React, { useEffect, useState } from 'react';
import ManageMyOrdersComponent from './ManageMyOrdersComponent';
import { useCurrentCustomer } from '../provider/UserProvider';
import useCustomers from '../hooks/useCustomers';
import useProducts from '../../products/hooks/useProducts';
import useOrders from '../../orders/hooks/useOrders';
import ROUTES from '../../router/routesModel';
import { useSnack } from '../../providers/SnackBarProvider';
import { Typography } from '@mui/material';

export default function ManageMyOrdersPage() {
    const { customer } = useCurrentCustomer();
    const { toTitleCase, navigate, getProductById } = useProducts();
    const { getCustomerById, deleteOrderFromCustomer } = useCustomers();
    const { getOrderById, deleteOrder } = useOrders();
    const [customerDetails, setCustomerDetails] = useState();
    const [customerOrders, setCustomerOrders] = useState([]);
    const [productImages, setProductImages] = useState({});
    const setSnack = useSnack()

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            try {
                if (customer) {
                    let fetchedDetails = await getCustomerById(customer._id);
                    setCustomerDetails(fetchedDetails);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchCustomerDetails();
    }, [customer]);

    useEffect(() => {
        const fetchCustomerOrders = async () => {
            try {
                const customerFromDB = await getCustomerById(customer?._id);
                const customerOrdersFromDb = await Promise.all(
                    customerFromDB?.orders.map(async (order) => await getOrderById(order))
                );
                setCustomerOrders(customerOrdersFromDb);
            } catch (err) {
                console.log(err);
            }
        };

        if (customerDetails) {
            fetchCustomerOrders();
        }
    }, [customerDetails]);

    const fetchAllProductImages = async () => {
        const images = {};
        for (const order of customerOrders) {
            if (Array.isArray(order.productsAndQuantity)) {
                for (const product of order.productsAndQuantity) {
                    if (!images[product.id]) {
                        try {
                            const productData = await getProductById(product.id);
                            images[product.id] = productData.image;
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
            }
        }
        setProductImages(images);
    };

    useEffect(() => {
        if (customerOrders.length > 0) {
            fetchAllProductImages();
        }
    }, [customerOrders]);

    useEffect(() => {
        if (!customer) {
            navigate(ROUTES.ROOT);
        }
    }, [customer]);

    const fetchProductName = async (id) => {
        try {
            let product = await getProductById(id)
            return product.name
        } catch (err) {
            console.log(err);
        }
    }

    const getTotalOrderPrice = async (order) => {
        try {
            let totalPrice = 0;

            if (Array.isArray(order.productsAndQuantity)) {
                for (const object of order.productsAndQuantity) {
                    const product = await getProductById(object.id);
                    const productTotal = product.price * object.quantity;
                    totalPrice += productTotal;
                }
            }

            return parseFloat(totalPrice.toFixed(2));
        } catch (err) {
            console.log(err);
            return null;
        }
    };

    const handleCancleOrder = async (id) => {
        try {
            const todayDate = new Date();
            const order = await getOrderById(id);
            const createdAtDate = new Date(order.createdAt);
            const fiveDaysAgoDate = new Date();
            fiveDaysAgoDate.setDate(todayDate.getDate() - 5);

            if (createdAtDate <= fiveDaysAgoDate) {
                setSnack("error", (
                    <>
                        We're sorry, but your order cannot be cancelled as more than 5 days have passed since it was created.
                        <Typography sx={{ color: "purple", fontWeight: "bold", cursor: "pointer" }}>
                            Contact Us
                        </Typography>
                    </>
                ));
            } else {
                try {
                    await deleteOrder(id)
                    await deleteOrderFromCustomer(customer?._id, id)
                    setCustomerOrders(prevOrders => prevOrders.filter(order => order._id !== id));
                    setSnack("success", "Order Deleted")
                } catch (err) {
                    console.log(err);
                }
            }

        } catch (err) {
            console.log(err);
        }
    };

    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [productNames, setProductNames] = useState({});
    const [orderPrices, setOrderPrices] = useState({});

    const toggleExpand = (orderId) => {
        setExpandedOrderId(prevId => (prevId === orderId ? null : orderId));
    };

    useEffect(() => {
        const fetchNames = async () => {
            const names = {};
            for (const order of customerOrders) {
                if (Array.isArray(order.productsAndQuantity)) {
                    for (const product of order.productsAndQuantity) {
                        if (!names[product.id]) {
                            names[product.id] = await fetchProductName(product.id);
                        }
                    }
                }
            }
            setProductNames(names);
        };

        fetchNames();
    }, [customerOrders]);

    useEffect(() => {
        const fetchOrderPrices = async () => {
            const prices = {};
            for (const order of customerOrders) {
                prices[order._id] = await getTotalOrderPrice(order);
            }
            setOrderPrices(prices);
        };

        fetchOrderPrices();
    }, [customerOrders]);

    return (
        <ManageMyOrdersComponent
            customerDetails={customerDetails}
            customerOrders={customerOrders}
            toTitleCase={toTitleCase}
            productImages={productImages}
            fetchProductName={fetchProductName}
            getTotalOrderPrice={getTotalOrderPrice}
            handleCancleOrder={handleCancleOrder}
            orderPrices={orderPrices}
            expandedOrderId={expandedOrderId}
            productNames={productNames}
            toggleExpand={toggleExpand}
        />
    );
}
