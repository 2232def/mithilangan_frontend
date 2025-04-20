import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 p-5  font-light text-white">
      <div className="text-3xl font-bold">
        Logo
      </div>

     
      <div className="hidden md:flex space-x-6 text-2xl">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#shop" className="hover:text-yellow-400">Shop</a>
        <a href="#products" className="hover:text-m-yellow-400">Products</a>
        <a href="#aboutus" className="hover:text-yellow-400">About Us</a>
      </div>

      <div className="flex items-center space-x-5">
        <FaSearch className="text-xl cursor-pointer hover:text-yellow-400" title="Search" />
        <FaUser className="text-xl cursor-pointer hover:text-yellow-400" title="User Login" />
        <FaShoppingCart className="text-xl cursor-pointer hover:text-yellow-400" title="Add to Cart" />
      </div>
    </nav>
  );
};

export default Navbar;