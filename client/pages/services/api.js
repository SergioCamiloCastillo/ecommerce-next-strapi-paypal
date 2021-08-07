import axios from "axios";

export const fetchProducts= async(query='') =>{
    const url = query ? `/products?${query}`:"/products"
    const {data} = await axios.get(`http://localhost:1337${url}`);
    return data;
}

export const createOrder = async order =>{
    const {data} = await axios.post(`http://localhost:1337/orders`, order);
    return data;
}