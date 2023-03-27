import React from "react";

import { useSelector } from "react-redux";


const Navbar = ()=>{
    const cartData = useSelector(store=>store)
    return (
        <>
            <h2>The number of items in the cart is {cartData.cartCount}</h2>
        </>
    )
}


export default Navbar