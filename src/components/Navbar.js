import React from 'react';

const Navbar = () => {
  return (
    <div>
      <ul className=' flex gap-5'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/swr">Swr</a></li>
        <li><a href="client">client</a></li>
        <li><a href="server">server</a></li>
      </ul>
    </div>
  );
};

export default Navbar;