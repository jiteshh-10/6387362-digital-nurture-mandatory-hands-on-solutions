import React, { useState } from 'react';
import './App.css';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};

    if (form.name.length < 5) {
      tempErrors.name = "Name must be at least 5 characters.";
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      tempErrors.email = "Email must include '@' and '.'.";
    }

    if (form.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear errors as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      setForm({ name: '', email: '', password: '' });
    } else {
      alert("Please fix validation errors.");
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="********"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
