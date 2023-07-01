import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import "./App.css";

const App = () => {

    return(
        <div>
            <BrowserRouter basename='/shopingcart_react'>
            <Routes>
                <Route path="/shopingcart_react" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;