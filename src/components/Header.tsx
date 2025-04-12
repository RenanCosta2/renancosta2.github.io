// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <div className='container'>
          <Link to="/" className='nav-profile nav-item'>Renan Costa</Link>
          <Link to="/resume" className='nav-item'>CV/Resume</Link>
          <Link to="/portfolio" className='nav-item'>Portfolio</Link>
        </div>
      </nav>
    </header>
  );
}
