import React, { useState } from "react";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      navigate("/Adminsection");
    }
  };
  return (
    <div className="container" style={{ width: "400px", padding: "50px" }}>
      <div className="mt-5">
        <h1
          className="display-4"
          style={{ fontSize: "40px", fontWeight: "600", fontFamily: "initial" }}
        >
          Admin Login
        </h1>
        <div className="form-group">
          <label
            htmlFor="username"
            style={{ fontWeight: "lighter", fontWeight: "600" }}
          >
            Username
          </label>
          <input
            type="text"
            className="form-control" // Customize this class or add custom styles
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="password"
            style={{ fontWeight: "lighter", fontWeight: "600" }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control" // Customize this class or add custom styles
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
         className="btn btn-primary" // Customize this class or add custom styles
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
