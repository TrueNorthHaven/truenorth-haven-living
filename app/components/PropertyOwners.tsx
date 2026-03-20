export default function PropertyOwners() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "42px", marginBottom: "20px" }}>
        Property Owners
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Partner with us to provide safe, structured housing.
      </p>

      <form action="https://formspree.io/f/xreydywb" method="POST">
        <input name="Name" placeholder="Full Name" required style={inputStyle} />
        <input name="Company" placeholder="Company (if applicable)" style={inputStyle} />
        <input name="Email" type="email" placeholder="Email" required style={inputStyle} />
        <input name="Phone" placeholder="Phone Number" style={inputStyle} />

        <textarea name="Property Info" placeholder="Property Details" required style={textareaStyle} />

        <button type="submit" style={buttonStyle}>Submit Property Info</button>
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
