import React from 'react';

const Sticker = ({ color = 'blue', text = 'Best in Market' }) => (
  <div className="absolute -top-2 -right-2 transform rotate-12">
    <div className={`${color === 'blue' ? 'bg-blue-600' : 'bg-red-500'} text-white text-xs font-bold py-1 px-2 rounded-full shadow-md`}>
      {text}
    </div>
  </div>
);

export default Sticker;