import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`This would now register: ${JSON.stringify(form, null, 2)}`);
    // In real app, POST to backend here
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI, sans-serif" }}>
      <h1>HELLO WORLD, THIS IS MY CUSTOM REGISTER PAGE</h1>
      <h2>B2C Custom Registration PoC</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div>
          <label>Name:</label><br />
          <input name="name" onChange={handleChange} required />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Email:</label><br />
          <input name="email" onChange={handleChange} required />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label><br />
          <input name="password" type="password" onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: "1.5rem" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
