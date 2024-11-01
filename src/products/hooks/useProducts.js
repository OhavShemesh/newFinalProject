import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentCustomer } from '../../customers/provider/UserProvider';

export default function useProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [chosenCategory, setChosenCategory] = useState("")
    const navigate = useNavigate()
    const { customer } = useCurrentCustomer()



    const ProductsApi = "http://localhost:8181/products";


    const getProducts = async () => {
        try {
            const response = await axios.get(ProductsApi);
            const data = response.data
            setAllProducts(data);
            return data
        } catch (err) {
            console.log(err);
        }
    };

    const getProductById = async (id) => {
        try {
            const response = await axios.get(`${ProductsApi}/${id}`);
            const data = response.data;
            setSingleProduct(data)
            return data

        } catch (err) {
            console.log(err);
        }
    };
    const addProduct = async (newProductDetails) => {
        try {
            const response = await axios.post(ProductsApi, newProductDetails)
            const data = response.data
            return data
        } catch (err) {
            console.log(err);

        }
    }
    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`${ProductsApi}/${id}`)
            const data = response.data
            return data
        } catch (err) {
            console.log(err);

        }
    }
    const updateProduct = async (id, updatedProductDetails) => {
        try {
            const response = await axios.put(`${ProductsApi}/${id}`, updatedProductDetails)
            const data = response.data
            return data
        } catch (err) {
            console.log(err);

        }
    }
    const updateInStock = async (id, newStock) => {
        try {
            console.log("newStockInPath", newStock);

            const response = await axios.patch(`${ProductsApi}/updateInStock`, { id: id, newStock: newStock })
            const data = response.data
            return data
        } catch (err) {
            console.log(err);

        }
    }
    const updateStockAfterOrder = async (cart) => {
        try {
            cart.map(async (product) => {
                const response = await axios.patch(`${ProductsApi}/updateStockAfterOrder`, {
                    id: product.id,
                    subFromStock: product.quantity
                });
                const data = response.data
                console.log(data);

            });

        } catch (err) {
            console.log("Error updating stock:", err);
        }
    };



    useEffect(() => {
        getProducts();
    }, []);

    const handleFilterByCategory = (innerText) => {
        console.log(innerText);

        if (innerText !== "all") {
            setChosenCategory(innerText);
        } else {
            setChosenCategory("");
        }

    }

    function toTitleCase(str) {
        if (typeof str !== 'string' || str.trim() === '') {
            return '';
        }

        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }



    return {
        allProducts,
        getProductById,
        singleProduct,
        setSingleProduct,
        handleFilterByCategory,
        navigate,
        toTitleCase,
        addProduct,
        deleteProduct,
        getProducts,
        updateProduct,
        updateInStock,
        updateStockAfterOrder

    };
}
