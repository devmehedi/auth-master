import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {
            user&&<Link className="btn btn-ghost normal-case text-xl" to="/profile">
          Profile
        </Link>
        }
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <Link className="ml-4" onClick={handleLogOut}>Log Out</Link>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
