import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    };

    try {
      const res = await fetch("http://localhost:7072/api/RegisterUserFunction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
          <label>First Name</label>
          <input name="firstName" onChange={handleChange} required />

          <label>Last Name</label>
          <input name="lastName" onChange={handleChange} required />

          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} required />

          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} required />

          <label>Re-enter Password</label>
          <input name="confirmPassword" type="password" onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
