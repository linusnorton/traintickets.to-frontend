import * as React from 'react';
import './Header.css';

export function Header() {
  return (
    <header className="header clearfix">
      <h1 className="header--logo">train<span className='color-highlight'>tickets</span>.to</h1>
      <h2 className="header--strapline">the <span className="color-highlight">cheapest</span> fare finder</h2>
    </header>
  )
}