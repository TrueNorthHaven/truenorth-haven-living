export default function Credibility() {
  return (
    <section
      style={{
        padding: "80px 24px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
          Why Choose TrueNorth Haven Living
        </h2>

        <p style={{ marginBottom: "40px", lineHeight: 1.7 }}>
          TrueNorth Haven Living works with individuals, families, case managers,
          and referral partners to support appropriate placement and a consistent
          living environment. We focus on clear expectations, dependable
          communication, and housing that is maintained with care.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>Structured Home Standards</div>
          <div>Clear Placement Process</div>
          <div>Referral-Friendly Communication</div>
          <div>Clean, Maintained Homes</div>
        </div>
        
        <h2 style={{ marginTop: "40px" }}>Our Process</h2>

<ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
  <li>All inquiries are reviewed before placement</li>
  <li>We respond within 24–48 hours</li>
  <li>Placement is based on fit and availability</li>
  <li>We maintain structured house expectations</li>
  <li>We communicate with referral partners throughout placement</li>
</ul>
      </div>
    </section>
  );
}
