// Context/ShopContext.js
import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);
 const getDefaultCart =()=>{
      let cart= {};
     for (let index = 0; index < all_product.length+1; index++) {
      cart[index]=0;
      
     }
     return cart;
    }
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =useState(getDefaultCart);
    const addToCart  =(itemId) =>{
        setCartItems((prev)=>(
          {...prev,[itemId]:prev[itemId]+1}
        ))
    }
     const removeFromCart  =(itemId) =>{
        setCartItems((prev)=>(
          {...prev,[itemId]:prev[itemId]-1}
        ))
    }

    const getTotalAmt =() =>{
      let totalAmt =0;
      for (const item in cartItems) {
        if(cartItems[item]>0){
          let itemInfo = all_product.find((product)=> product.id ===Number(item))
       totalAmt+= itemInfo.new_price * cartItems[item];
        }
      }
        return totalAmt;  
    }

    const getTotalCardItems= ()=>{
      let totalItem = 0;
      for (const item in cartItems) {
        if(cartItems[item]>0){
          totalItem+= cartItems[item];
        }
      }
      return totalItem;
    }

      const contextValue = {getTotalCardItems, getTotalAmt, all_product, cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
