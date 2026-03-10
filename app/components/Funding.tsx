export default function Funding() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#f7f7f7",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#1f2a37" }}>
        Accepted Funding & Payment Sources
      </h2>

      <p style={{ maxWidth: "800px", margin: "0 auto 40px", fontSize: "18px", color: "#4b5563" }}>
        TrueNorth Haven Living welcomes individuals with stable income sources
        who are seeking a structured and supportive shared housing environment.
        We work with a variety of funding types and referral programs that
        support independent and transitional living.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <div className="card">SSI / SSDI Income</div>
        <div className="card">Employment Income</div>
        <div className="card">Government Housing Programs</div>
        <div className="card">Program Vouchers</div>
        <div className="card">Case Manager Placements</div>
        <div className="card">Self-Pay Residents</div>
      </div>
    </section>
  );
}