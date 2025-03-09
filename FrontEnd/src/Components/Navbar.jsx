import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; 

const Navbar = () => {
  const { user, logout } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () =>{
    logout();
    navigate('/')
  }

  let homelink;
  if (user.isLoggedIn && user.role === "user") {
    homelink = (
      <ul className="list-group list-unstyled">
         <li className="nav-item m-2">
          <Link to="/user-home" className="nav-item text-decoration-none fs-2 text-white">Home</Link>
        </li>
        <li className="nav-item m-2">
          <Link to="/user-orders" className="nav-item text-decoration-none fs-2 text-white">My Orders</Link>
        </li>
      </ul>
     
      
    );
  } else if (user.isLoggedIn && user.role === "hotel") {
    homelink = (
      <li className="nav-item m-2">
        <Link to="/hotel-home" className="nav-item text-decoration-none fs-2 text-white">Home</Link>
      </li>
    );
  } else {
    homelink = (
      <li className="nav-item m-2">
        <Link to="/" className="nav-item text-decoration-none fs-2 text-white">Home</Link>
      </li>
    );
  }

  // Profile Dropdown
  let profile;
  if (user.isLoggedIn) {
    profile = (
      <li className="nav-item dropdown m-2" id="logged-in">
        <Link
          to="#"
          className="nav-item text-decoration-none fs-2 text-white dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {user.email}
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </li>
    );
  } else {
    profile = (
      <li className="nav-item dropdown m-2" id="logged-in">
        <Link to="/login" className="nav-item text-decoration-none fs-2 text-white dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
          Sign In
        </Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/user-login">Customer</Link></li>
          <li><Link className="dropdown-item" to="/hotel-login">Restaurant</Link></li>
        </ul>
      </li>
    );
  }

  // Register Dropdown
  let register;
  if (!user.isLoggedIn) {
    register = (
      <li className="nav-item dropdown m-2" id="loggedin">
        <Link to="/register" className="nav-item text-decoration-none fs-2 text-white dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
          Register
        </Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/user-register">Customer</Link></li>
          <li><Link className="dropdown-item" to="/hotel-register">Restaurant</Link></li>
        </ul>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success mb-5 p-3">
      <div className="container-fluid">
        <img src="pic.jpg" alt="Logo" width="175" height="120" className="d-inline-block align-text-top rounded-pill m-2" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse m-2" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-2 gap-5" >
            {homelink} 
            {profile}
            {register}
          </ul>
          <h1 style={{color:"whitesmoke"}}>Welcome to Food Delivery Application</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
