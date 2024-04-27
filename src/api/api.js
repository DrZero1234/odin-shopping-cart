import { FetchOptions } from "../utils/fetchOptions"
import { ProductListMock } from "./ProductListMock"
import { productDataMock } from "./productDataMock"

export const getCategories = async(key) => {

    
    const res = await fetch("https://affogato-the-ecommerce-store.p.rapidapi.com/api/categories",FetchOptions(key,"GET"))
    if (!res.ok) {
      console.log(res)
      throw {
        message: "Failed to fetch categories",
        statusText: res.statusText,
        status: res.status
      }
    }
    return await res.json()
    

    /*
    return [
  "Shoes",
  "Accessories",
  "Men's Clothing",
  "Women's Clothing",
  "Jewelry"
  
]
*/
}


export const getCategoryProductList = async (key,categoryName) => {
    // Original version
    const res = await fetch(`https://affogato-the-ecommerce-store.p.rapidapi.com/api/items/category/${encodeURI(categoryName)}`, FetchOptions(key))
    if (!res.ok) {
      throw {
        message: "Failed to fetch category product list",
        statusText: res.statusText,
        status: res.status
      }
    }
    //return res.json();
    
    // Test version 
    return {items: ProductListMock}
} 

export const getProductById = async(key,productId) => {
  // Original version
    const res = await fetch(`https://affogato-the-ecommerce-store.p.rapidapi.com/api/items/${productId}`, FetchOptions(key));
    if (!res.ok) {
      console.log(res)
      throw {
        message: "Failed to fetch product data",
        statusText: res.statusText,
        status: res.status
      }
    }
    return await res.json()
  
  // Test version

  // return productDataMock
}