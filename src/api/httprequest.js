import Products from "../components/Products.jsx";
import{API_URL} from "./api_url.js";
import axios from "axios";

// Get All Products
export async function getAllProducts() {
    let globalData;
    await axios.get(`${API_URL}/products`)
    .then((res)=>{
        globalData =res.data;
    })
    return globalData;

}

// Get All Products By ID
export async function getProductsByID(id) {
    let globalData;
    await axios.get(`${API_URL}/products/${id}`)
    .then((res)=>{
        globalData =res.data;
    })
    return globalData;

}

// Post Products
export async function postProduct(payload) {
    let result;
    await axios.post(`${API_URL}/products`, payload)
    .then((res)=>{
        result = res
    })
    return result;
}


// Put Products By ID
export async function putProductByID(id,payload) {
    let result;
    await axios.put(`${API_URL}/products/${id}`, payload)
    .then((res)=>{
        result = res
    })
    return result;
}

// Put Products By ID
export async function patchProductByID(id,payload) {
    let result;
    await axios.patch(`${API_URL}/products/${id}`, payload)
    .then((res)=>{
        result = res
    })
    return result;
}



// Delete Products by ID

export async function deleteProductByID(id) {
    let result;
    await axios.delete(`${API_URL}/products/${id}`)
    .then((res)=>{
        result = res
    })
    return result;
}