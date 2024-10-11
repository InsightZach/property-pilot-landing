import React from 'react';

const Sticker = ({ text, color = 'blue' }) => (
  <div className={`absolute -top-3 -right-3 ${color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'} text-white text-xs font-bold py-1 px-2 rounded-full transform rotate-12 shadow-lg`}>
    {text}
  </div>
);

export default Sticker;