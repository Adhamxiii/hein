import axios from "axios";

export const getCategories = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/categories')
    return res.data
};

export const getCategoryProducts = async (category: string) => {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return res.data
};

export const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
};

export const getProductById = async (productId: string) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    return res.data
};

// export const addToCart = async (productId: string, quantity: number) => {
//     const res = await axios.post('https://fakestoreapi.com/carts', { productId, quantity })
//     return res.data
// };

// export const getCart = async () => {
//     const res = await axios.get('https://fakestoreapi.com/carts')
//     return res.data
// }