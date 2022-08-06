import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/about">About</Link>
        </nav>

        <Outlet />
        <footer>Powered by Qing Zhou</footer>
      </div>
    );
  };
  
  export default Layout;