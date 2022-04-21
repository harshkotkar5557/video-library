import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();
  const { isAuth, setAuth } = useAuth();
  const [sideBar, setSidebar] = useState(false);

  return (
    <div>
      <nav className="navbar_std bg-grey">
      <header className="d-flex justify-space-bw align-center">
        <div className="brandName" >
          <i className="fa fa-bars m-1" aria-hidden="true" onClick={()=> setSidebar(!sideBar)}></i>
          <span onClick={() => navigator("/")} className="white-color">UTube</span>
        </div>
          <div className="nav-right-box d-flex gap-1">
          <h4 className="white-color">Hi, Haresh</h4>
          {!isAuth ? (
            <button className="btn default mobile-view" onClick={() => navigator("/login")}>
              Login
            </button>
          ) : (
            <button className="btn danger mobile-view" onClick={() => setAuth(false)}>
              Logout
            </button>
            )}
          {isAuth && (
            <div className="avatar" onClick={() => navigator("/profile")}>
              <i className="fa fa-user white-color" aria-hidden="true"></i>
            </div>
          )}
        </div>
      </header>
    </nav>
      <div className={sideBar ? "nav-menu-active" : "nav-menu"}>
        <div className="cross-icon" onClick={()=> setSidebar(!sideBar)}><i class="fa fa-times" aria-hidden="true"></i></div>
        <ul className="nav-menu-item" onClick={()=> setSidebar(!sideBar)}>
          <li className="navbar-toggle">
            <Link to="/" className="menu-bars">
              <i class="fa fa-home" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/videos" className="menu-bars">
            <i class="fa fa-video-camera" aria-hidden="true"></i> Videos
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/playList" className="menu-bars">
            <i class="fa fa-list" aria-hidden="true"></i> Play List
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/watchLater" className="menu-bars">
            <i class="fa fa-eye" aria-hidden="true"></i> Watch Later
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/history" className="menu-bars">
            <i class="fa fa-history" aria-hidden="true"></i> Watch History
            </Link>
          </li>
          <li className="navbar-toggle text-center">
          {!isAuth ? (
            <button className="btn default" onClick={() => navigator("/login")}>
              Login
            </button>
          ) : (
            <button className="btn danger" onClick={() => setAuth(false)}>
              Logout
            </button>
            )}
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
