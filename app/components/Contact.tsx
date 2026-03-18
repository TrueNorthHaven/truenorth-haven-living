"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#D7D1C7",
            marginBottom: "30px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Placement inquiries are typically reviewed within 24–48 hours.
          Agency referrals, program-funded placements, and voucher-supported
          housing are welcome.
        </p>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#CFC7BA",
            marginBottom: "30px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Non-medical supportive housing • Structured shared living • Adults 18+
          • Las Vegas & Henderson • Agency referrals welcome
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
            action="https://formspree.io/f/mlgpaplg"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              style={inputStyle}
            />

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

            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="hidden"
              name="_subject"
              value="New Placement Inquiry"
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#D8B25A",
                color: "#1E2A3A",
                padding: "16px",
                borderRadius: "999px",
                border: "none",
                fontWeight: 700,
                fontSize: "16px",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Submit Inquiry
            </button>
          </form>
        )}

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#D7D1C7",
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.8,
          }}
        >
          You may also contact us directly regarding referral partnerships,
          placement availability, or program-supported housing opportunities.
        </p>
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
