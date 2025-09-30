import React, { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ onBook }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all fields.");
      return;
    }
    onBook(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Enter Your Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <button type="submit">Continue</button>
    </form>
  );
};

export default BookingForm;
