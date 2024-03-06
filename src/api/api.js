import { FetchOptions } from "../utils/fetchOptions"
import { ProductListMock } from "./ProductListMock"

export const getCategories = async(key) => {

    /*
    const res = await fetch("https://affogato-the-ecommerce-store.p.rapidapi.com/api/categories",FetchOptions(key,"GET"))
    return await res.json()
    */

    return [
  "Shoes",
  "Accessories",
  "Men's Clothing",
  "Women's Clothing",
  "Jewelry"
]
}


export const getCategoryProductList = async (key,categoryName) => {
    /* Original version
    const res = await fetch(`https://affogato-the-ecommerce-store.p.rapidapi.com/api/items/category/${encodeURI(categoryName)}`, FetchOptions(key))
    return await res.json();
    */

    return ProductListMock
} 
