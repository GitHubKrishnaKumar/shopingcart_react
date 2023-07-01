import React, {useEffect} from 'react'; 
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions/apiActions'; 
import {addToCart} from '../redux/actions/cartActions';
import { Link } from "react-router-dom";

const HomePage = () => {
    const {loading, products, error} = useSelector(state => state.products);
    console.log(loading, products, error)
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(fetchProducts())
    },[])

     if(loading) {
        return <h1>Loading...</h1>
     }
     if(error){
        return <h1>{error}</h1>
     }

    return(
        <div>
            <div className='header'>
                <div className='logo'>
                    Shopping Cart
                </div>
                <div className='menu'>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
            <h1 className='head'>
                All Item
            </h1>
            <div className='main'>
            {
            products.map(product => (
                <div key={product.id} className='main-div'>
                    <img src={product.thumbnail} alt={product.title} />
       
                    <h3>Title : {product.title}</h3>
                    <span>Description : {product.description}</span><br/>
                    <span>Price : {product.price} &#8377;</span><br/>
                    <span>Discount : {product.discountPercentage}</span><br/>
                    <span>Rating : {product.rating}</span><br/>
                    <span>Stock : {product.stock}</span><br/>
                    <span>Brand : {product.brand}</span><br/>
                    <span>Category : {product.category}</span>
                    
                    <button className='addBtn'
                        onClick = {() => {dispatch(addToCart(product))
                            alert("Item added in cart...");
                        console.log(product)
                    }}
                    > Add to Cart</button>
                </div>
            ))
            }
        </div>
        </div>
    )
} 

export default HomePage;
