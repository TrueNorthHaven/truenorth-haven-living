export default function ReferralPartners() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "20px" }}>
        Referral Partners
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Submit a referral for placement consideration.
      </p>

      <form action="https://formspree.io/f/xkoqeqad" method="POST">
        <input name="Name" placeholder="Full Name" required style={inputStyle} />
        <input name="Organization" placeholder="Organization" style={inputStyle} />
        <input name="Email" type="email" placeholder="Email" required style={inputStyle} />
        <input name="Phone" placeholder="Phone Number" style={inputStyle} />

        <textarea name="Client Details" placeholder="Client Details" required style={textareaStyle} />

        <button type="submit" style={buttonStyle}>Submit Referral</button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  minHeight: "120px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#2F4054",
  color: "white",
  border: "none",
};
