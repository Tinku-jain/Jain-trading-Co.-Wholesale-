import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }

      setSuccessMessage("Enquiry submitted successfully. We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div
        className="main-container"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Contact Us</h1>

        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Send your enquiry and it will appear in the admin dashboard.
        </p>

        {successMessage && (
          <div
            style={{
              backgroundColor: "#e8f9e8",
              color: "#1f7a1f",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "15px"
            }}
          >
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div
            style={{
              backgroundColor: "#fdeaea",
              color: "#b30000",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "15px"
            }}
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px"
            }}
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              resize: "vertical"
            }}
          />

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
            style={{ width: "fit-content" }}
          >
            {loading ? "Submitting..." : "Send Enquiry"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;