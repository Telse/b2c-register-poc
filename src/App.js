import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Registering user:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="page-wrapper">
      <div className="register-card">
        <h2 className="title">Create your account</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <label>Email address</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            type="email"
            required
          />

          <label>Password</label>
          <input
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            required
          />

          <button type="submit">Register</button>
        </form>
        <div className="footer-text">Already have an account? Sign in</div>
      </div>
    </div>
  );
}

export default App;
