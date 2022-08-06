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
        <footer style={{position: "absolute", bottom: 0}}>Powered by Qing Zhou</footer>
      </div>
    );
  };
  
  export default Layout;