import { useEffect, useState } from "react"
import axios from "axios";


function Homepage() {

    const sampleProducts = [
        { name: 'product 1', price: 100.00 },
        { name: 'product 2', price: 200.00 }
    ]

    const [products, setProducts ] = useState(sampleProducts);

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
      setProducts(prevState => [...prevState, { name: `Product ${prevState.length+1}`, price: 300.00 }]);
    }
    
    return (
    <>
    <h1>Restore</h1>
    <ul>
        {products.map((item, index)=>{
            return <li key={index}>{item.name} - {item.price}</li>
        })}
    </ul>
    <button onClick={addProduct}>Add Product</button>
    </>
  )
}
export default Homepage