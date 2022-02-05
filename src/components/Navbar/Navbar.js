import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const margin = { margin: "0 10px" };

function Navbar() {
  const { user, handleLogout } = useAuth();

  if (user) {
    return (
      <div>
        <Link style={margin} to="/">
          Home
        </Link>
        <Link style={margin} to="/projects">
          Projects
        </Link>
        <Link style={margin} to="/new-project">
          New project
        </Link>
        <button style={margin} onClick={handleLogout}>
          logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/login">Login</Link>
      <Link style={{ marginLeft: "15px" }} to="/signup">
        Signup
      </Link>
    </div>
  );
}

export default Navbar;
