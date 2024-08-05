import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

function DefaultLayout() {
  return (
    <div>
      {/* Default header */}
      <header>
        <Navigation />
        <h1>Default Layout Header</h1>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Default footer */}
      <footer>
        <h1>Default Layout Footer</h1>
      </footer>
    </div>
  );
}

export default DefaultLayout;
