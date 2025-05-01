import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`This would now register: ${JSON.stringify(form, null, 2)}`);
    // Ideally, send to your backend here
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>B2C Custom Registration PoC</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label><br />
          <input name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label><br />
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Register</button>
      </form>
    </div>
  );
}

export default App;
