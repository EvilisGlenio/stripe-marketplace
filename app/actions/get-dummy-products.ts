// "use server"

// import { DummyProduct } from "@/types"


// export async function getDummyProducts(page: number){
//     const perPage = 8;
//     const apiUrl = `https://dummyjson.com/products?page=${page}&per_page=${perPage}`

//     try {
//         const response = await fetch(apiUrl)
//         const dummyData = await response.json()
//         const products = dummyData.products.map((product: DummyProduct) => {
//             return {
//                 id: product.id,
//                 description: product.description,
//                 name: product.title,
//                 images: product.images,
//                 default_price_data: {
//                     unit_amount_decimal: product.price,
//                     currency: "BRL",
//                 }
//             }
//         })
//         return products
//     } catch (error) {
//         console.error("Error fetching products: ", error)
//         return null;
//     }
// }