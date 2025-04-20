import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Mawa Online Shop</h2>
          <p className="text-gray-300 text-small">
            Discover a world of beauty at your fingertips! Our beauty online shop offers a curated selection of top skincare, makeup, haircare, and wellness products to suit every style and need.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#shop" className="hover:text-yellow-400">Shop</a></li>
            <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="#aboutus" className="hover:text-yellow-400">About Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Updates</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li><a href="#recent" className="hover:text-yellow-400">Recent</a></li>
            <li><a href="#newproduct" className="hover:text-yellow-400">New Product</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#blog" className="hover:text-yellow-400">Blog</a></li>
          </ul>
        </div>

        {/* Fourth Section: Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4 text-gray-300 ">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 my-8" />
      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-300">
        <p>Copyright © 2025 Mawadesign. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;