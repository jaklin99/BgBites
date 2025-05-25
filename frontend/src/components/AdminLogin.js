import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuth } from "../api/auth";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.get("http://localhost:8080/recipes", {
        auth: {
          username: credentials.email,
          password: credentials.password,
        },
      });

      setAuth(credentials.email, credentials.password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <div style={{ position: "relative" }}>
          <input
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={credentials.password}
            onChange={handleChange}
            required
            style={{ paddingRight: "40px" }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "14px",
              color: "#666",
              userSelect: "none",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
