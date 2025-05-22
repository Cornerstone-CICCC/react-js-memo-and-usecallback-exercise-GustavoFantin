import { useCallback, useEffect, useState } from 'react'
import GetProductsButton from './GetProductsButton'

type Product = {
   id: number,
   title: string,
   price: number
}

const ProductList = () => {
   const [products, setProducts] = useState<Product[]>([])

   const fetchProducts = useCallback(async () => {
      try {
         const res = await fetch(`https://dummyjson.com/products`)
         const data = await res.json()
         setProducts(data.products)
      } catch (e) {
         console.error(e)
      }
   }, [])


  return (
    <div>
      <h1>Product List:</h1>
      <ul>
         {products.map(p => (
            <li key={p.id}>
               {p.title} - ${p.price}
            </li>
         ))}
      </ul>
      
      <GetProductsButton onFetch={fetchProducts}/>
    </div>
  )
}

export default ProductList