import { Product } from "../models/product";

interface Props {
    products: Product[];
    addProduct: () => void;
}

function Catalog({products, addProduct}:Props) {
  return (
    <>
    <ul>
        {products.map((product)=>{
            return <li key={product.id}>{product.name} - {product.price}</li>
        })}
    </ul>
    <button onClick={addProduct}>Add Product</button>
    </>
  )
}
export default Catalog

