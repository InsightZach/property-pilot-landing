import React from 'react';

const Sticker = ({ text, color = 'blue' }) => (
  <div className="absolute -top-3 -right-3 transform rotate-12">
    <div className={`${color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'} text-white text-xs font-bold py-1 px-3 rounded-lg shadow-lg flex items-center`}>
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1h-3l-3 3-3-3H2a1 1 0 01-1-1V2a1 1 0 011-1h3zm0 2v8h2.586l2.414 2.414L12.414 12H15V4H5z" clipRule="evenodd" />
      </svg>
      {text}
    </div>
  </div>
);

export default Sticker;