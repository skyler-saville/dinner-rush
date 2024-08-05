import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

function OtherLayout() {
  return (
    <div>
      {/* Other layout header */}
      <header>
        <Navigation />
        <h1>Other Layout Header</h1>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Other layout footer */}
      <footer>
        <h1>Other Layout Footer</h1>
      </footer>
    </div>
  );
}

export default OtherLayout;
