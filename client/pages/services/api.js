import axios from "axios";

export const fetchProducts= async() =>{
    const {data} = await axios.get("http://localhost:1337/products");
    return data;
}