import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from "../models/product";
import Catalog from "../components/Catalog";


function Homepage() {

    const [products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error); 
            }
        };
        fetchProducts();
    }, []); 

    const addProduct = () => {
      setProducts(prevState => [...prevState, { 
        id: prevState.length + 101, 
        name: `Product ${prevState.length+1}`, 
        price: 300.00,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://test.com',
     }]);
    }
    
    return (
    <>
    <h1>Restore</h1>
    {/* <ul>
        {products.map((product)=>{
            return <li key={product.id}>{product.name} - {product.price}</li>
        })}
    </ul>
    <button onClick={addProduct}>Add Product</button> */}
    <Catalog products={products} addProduct={addProduct}/>
    </>
  )
}
export default Homepage