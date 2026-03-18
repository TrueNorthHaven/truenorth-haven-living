"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mlgpaplg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      className="fade-in"
      id="contact"
      style={{
        padding: "100px 20px",
        backgroundColor: "#1E2A3A",
        color: "#FFFFFF",
        textAlign: "center",
        scrollMarginTop: "110px",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p
          style={{
            color: "#D8B25A",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "14px",
            fontWeight: 700,
          }}
        >
          Placement & Referral
        </p>

        <h2
          style={{
            fontSize: "42px",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Submit a Placement Inquiry
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#E8E3DB",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          For referral partners, case managers, property owners, or individuals
          seeking structured shared housing, please complete the form below.
        </p>

        {submitted ? (
          <div
            style={{
              backgroundColor: "#D8B25A",
              color: "#1E2A3A",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "520px",
              margin: "0 auto",
              fontWeight: 700,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Thank you. Your inquiry has been submitted successfully.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
            <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
            <input type="text" name="phone" placeholder="Phone Number" style={inputStyle} />
            <input
              type="text"
              name="agency"
              placeholder="Agency / Organization (if applicable)"
              style={inputStyle}
            />

            <select name="inquiryType" required style={inputStyle}>
              <option value="">Type of Inquiry</option>
              <option value="Placement Request">Placement Request</option>
              <option value="Referral Partner">Referral Partner</option>
              <option value="Property Owner">Property Owner</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <select name="funding" style={inputStyle}>
              <option value="">Funding Type</option>
              <option value="Private Pay">Private Pay</option>
              <option value="SSI / SSDI">SSI / SSDI</option>
              <option value="Housing Voucher">Housing Voucher</option>
              <option value="VA Benefits">VA Benefits</option>
              <option value="Agency Funded">Agency Funded</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Provide details about the placement or inquiry..."
              rows={5}
              required
              style={inputStyle}
            />

            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_subject" value="New Placement Inquiry" />

            <button
              type="submit"
              disabled={submitting}
              style={{
                backgroundColor: "#D8B25A",
                color: "#1E2A3A",
                padding: "16px",
                borderRadius: "999px",
                border: "none",
                fontWeight: 700,
                fontSize: "16px",
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.7 : 1,
                fontFamily: "Arial, sans-serif",
              }}
            >
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>

            {error ? (
              <p style={{ color: "#ffb4b4", fontFamily: "Arial, sans-serif" }}>{error}</p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
};
