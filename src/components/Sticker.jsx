import React from 'react';

const Sticker = ({ color = 'blue', text = 'Best in Market' }) => (
  <span className="inline-block ml-2">
    <span className={`${color === 'blue' ? 'bg-blue-600' : 'bg-red-500'} text-white text-xs font-bold py-1 px-2 rounded-full shadow-md`}>
      {text}
    </span>
  </span>
);

export default Sticker;