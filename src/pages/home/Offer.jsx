import React from 'react';

const Offer = () => {
  return (
    <div className="flex h-screen p-6 gap-6">
      {/* Left Side: Full-height Image */}
      <div className="w-1/2 h-90% flex-center">
        <img
          src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?ga=GA1.1.710953760.1736890476&semt=ais_hybrid&w=740" // Replace with your image URL
          alt="Offer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 bg-gray-100">
        <h1 className="text-7xl font-light mb-9">MITHILANGAN</h1>
        <h2 className="text-2xl font-semibold mb-4">GET 20% OFF YOUR FIRST ORDER</h2>
        <p className="text-gray-700 mb-6">
          Be the first to discover new arrivals, exclusive offers, and more.
        </p>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <button className="w-full bg-black text-white py-3 rounded-md mb-4">
          SIGN UP
        </button>
        <button className="w-full text-gray-500 py-3 rounded-md ">
          No, thanks
        </button>
        <p className="text-sm w-full text-gray-500 mt-6 text-center">
          *Only available on first order. Minimum spend $45. By providing your email address, you agree to our{' '}
          <a href="#" className="text-blue-500 underline text-center">
            <br />Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Offer;