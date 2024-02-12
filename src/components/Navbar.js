import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <ul className=' flex gap-5'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/swr">Swr</Link></li>
        <li><Link href="client">client</Link></li>
        <li><Link href="server">server</Link></li>
        <li><Link href="props">Props</Link></li>
        <li><Link href="dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;