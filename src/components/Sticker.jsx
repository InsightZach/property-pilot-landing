import React from 'react';

const Sticker = ({ color = 'blue', text = 'Best in Market' }) => (
  <span className="inline-block">
    <span className={`bg-blue-600 text-yellow-300 text-xs font-bold py-1 px-2 rounded-full shadow-md`}>
      {text}
    </span>
  </span>
);

export default Sticker;