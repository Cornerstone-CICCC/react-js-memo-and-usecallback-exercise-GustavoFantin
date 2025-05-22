import { memo } from "react"

type Props = {
   onFetch: () => void
}

const GetProductsButton = memo(({ onFetch }: Props) => {
   console.log("Rendered Button Component")

   return (
    <button onClick={onFetch}>Fetch Products</button>
  )
})

export default GetProductsButton