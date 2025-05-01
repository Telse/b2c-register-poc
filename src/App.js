import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:7072/api/RegisterUserFunction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        alert(`Registration failed: ${result.error || "Unknown error"}`);
      } else {
        alert("Registration successful!");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while registering.");
    }
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
