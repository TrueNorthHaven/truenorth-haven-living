"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      style={{
        padding: "90px 20px",
        backgroundColor: "#1E2A3A",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Placement Inquiry
      </h2>

      <p style={{ marginBottom: "40px", color: "#ddd" }}>
        Submit your information and we will follow up promptly.
      </p>

      {submitted ? (
        <div
          style={{
            backgroundColor: "#D8B25A",
            color: "#1E2A3A",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "500px",
            margin: "0 auto",
            fontWeight: 600,
          }}
        >
          Thank you. Your inquiry has been submitted successfully.
        </div>
      ) : (
        <form
          action="https://formspree.io/f/mlgpaplg"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input name="name" placeholder="Full Name" required style={input} />
          <input name="email" type="email" placeholder="Email Address" required style={input} />
          <input name="phone" placeholder="Phone Number" style={input} />

          <input name="agency" placeholder="Agency / Organization (if applicable)" style={input} />

          <select name="inquiryType" required style={input}>
            <option value="">Type of Inquiry</option>
            <option>Placement Request</option>
            <option>Referral Partner</option>
            <option>Property Owner</option>
            <option>General Inquiry</option>
          </select>

          <select name="funding" style={input}>
            <option value="">Funding Type</option>
            <option>Private Pay</option>
            <option>SSI / SSDI</option>
            <option>VA Benefits</option>
            <option>Agency Funded</option>
          </select>

          <textarea
            name="message"
            placeholder="Provide details about the placement or inquiry..."
            rows={5}
            required
            style={input}
          />

          {/* Spam protection */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input type="hidden" name="_subject" value="New Placement Inquiry" />

          <button
            type="submit"
            style={{
              backgroundColor: "#D8B25A",
              color: "#1E2A3A",
              padding: "14px",
              borderRadius: "999px",
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Submit Inquiry
          </button>
        </form>
      )}
    </section>
  );
}

const input = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
};
