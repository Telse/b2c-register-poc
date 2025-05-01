import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering user:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            type="email"
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
        <p className="footnote">Already have an account? Sign in</p>
      </div>
    </div>
  );
}

export default App;
