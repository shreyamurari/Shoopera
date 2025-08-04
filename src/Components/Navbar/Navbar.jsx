import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>Shopera</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{textDecoration:'none', color:'rgb(47, 46, 46)'}}>  Shop </Link>
          {menu === "shop"?<hr />:<></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to='/men' style={{textDecoration:'none', color:'rgb(47, 46, 46)'}}> Men</Link>
          {menu === "men"? <hr />:<></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to='/women' style={{textDecoration:'none', color:'rgb(47, 46, 46)'}}>  Women </Link>
          {menu === "women"?<hr />:<></>}
        </li>
        <li onClick={() => setMenu("kids")}>
         <Link to='/kids' style={{textDecoration:'none', color:'rgb(47, 46, 46)'}}> Kids</Link> 
          {menu === "kids"?<hr />:<></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to ='/login'> <button>Login</button> </Link>
         <Link to ='/cart'> <img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
