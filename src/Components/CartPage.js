
import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import {removeFromCart, checkout } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
const CartPage = () => {
      const {cart} = useSelector(state => state.cart);
      console.log(cart)
    const dispatch = useDispatch();


    const totalPrice =  cart.reduce((total, product) => total + product.price, 0)


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
                My Cart
            </h1>
            <div className='main-cart'>
              <div className="main-left">
                {
                      cart.map(item => (
                          <div key={item.id} className='main-left-div'>
                            <img src={item.thumbnail} alt={item.title} />
                            <h3>Title : {item.title}</h3>
                              <span>Price : {item.price}  &#8377;</span><br/>
                              <span>Discount : {item.discountPercentage}%</span><br/>
                              <span>Rating : {item.rating}</span><br/>
                              <button className="removeBtn"
                                onClick = {() => dispatch(removeFromCart(item.id))}
                              >Remove From Cart</button>
                          </div>
                      ))
                }
              </div>
              <div className="main-right">
                  <h1>Total Price: {totalPrice}</h1>

                  <button className="checkoutBtn"
                  onClick={() => dispatch(checkout())}
                  >Checkout</button>
              </div>
            </div>
        </div>
    )
}

export default CartPage;