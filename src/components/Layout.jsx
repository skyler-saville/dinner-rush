import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Dinner Rush</h1>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        &copy; Copyright 2024
      </footer>
    </div>
  );
}

export default Layout;
