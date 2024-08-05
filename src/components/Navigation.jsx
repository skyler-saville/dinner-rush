// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../utils/pages';

function Navigation() {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
