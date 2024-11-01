import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import { Box, Button, CardMedia, Container, Typography } from '@mui/material';
import useCart from '../hooks/useCart';
import { useCurrentCustomer } from '../../customers/provider/UserProvider';
import useCustomers from '../../customers/hooks/useCustomers';

export default function SingleProduct() {
    const { getProductById, toTitleCase } = useProducts();
    const { handleAddToCart } = useCart()
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0)
    const { getCustomerById } = useCustomers()
    const { customer } = useCurrentCustomer()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getProductById(id);
                setSingleProduct(product);
            } catch (err) {
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchQuantityOfProduct = async () => {
            if (customer && singleProduct) {
                try {
                    const customerData = await getCustomerById(customer._id);
                    const cartItem = customerData.cart.find(item => item.id === singleProduct._id);

                    if (cartItem) {
                        setQuantity(cartItem.quantity);
                    }
                } catch (err) {
                    console.error("Error fetching customer data:", err);
                }
            }
        };

        fetchQuantityOfProduct();
    }, [customer, singleProduct]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!singleProduct) {
        return <div>Product not found.</div>;
    }

    return (
        <Box sx={{ display: "flex", mt: 2 }}>
            <Box sx={{ width: "40%", ml: 2 }}>
                <CardMedia
                    sx={{ objectFit: "scale-down", borderRadius: "20px" }}
                    component="img"
                    image={singleProduct?.image.url}
                />
            </Box>
            <Box sx={{ mt: 2, ml: 2, display: 'flex', flexDirection: "column", gap: 2 }}>
                <Typography variant='h3' sx={{ fontWeight: "bold" }}>{toTitleCase(singleProduct?.name)}</Typography>
                <Typography variant='h6' >{singleProduct?.description}</Typography>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>Price: {singleProduct?.price}₪</Typography>
                <Box sx={{
                    display: 'flex', border: "1px solid black", width: "fit-content", alignItems: "center",
                    borderRadius: "20px", backgroundColor: "black"
                }}>
                    <Button onClick={() => handleIncrement()} sx={{ color: "white", fontSize: "20px" }}>+</Button>
                    <Typography sx={{ color: "white" }}>{quantity}</Typography>
                    <Button onClick={() => handleDecrement()} sx={{ color: "white", fontSize: "20px", letterSpacing: "-3px" }}>--</Button>
                </Box>
                <Box sx={{ marginTop: "auto", marginBottom: 3 }}>
                    <Button onClick={() => customer ? handleAddToCart(singleProduct?._id, quantity) : console.log("please Login")}
                        sx={{
                            color: 'white',
                            backgroundColor: customer ? "black" : "grey",
                            borderRadius: "20px",
                            width: "100%",
                            opacity: customer ? 1 : 0.6,

                        }}>
                        Add To Cart
                    </Button>
                </Box>
            </Box >
        </Box >
    );
}
