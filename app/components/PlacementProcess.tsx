export default function PlacementProcess() {
  return (
    <section
      style={{
        padding: "90px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <p
          style={{
            color: "#C9A449",
            letterSpacing: "3px",
            fontWeight: 600,
            marginBottom: "12px",
            textTransform: "uppercase",
            fontSize: "14px"
          }}
        >
          Placement Process
        </p>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "25px",
            color: "#1E2F45"
          }}
        >
          How placement inquiries work
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            lineHeight: 1.8,
            maxWidth: "800px",
            margin: "0 auto 40px auto"
          }}
        >
          Our goal is to ensure that each placement is a good fit for both the
          resident and the household community. The following steps outline
          the typical placement process.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >

          <div className="card">
            <strong>1. Submit Inquiry</strong>
            <p>A referral partner or individual submits a placement inquiry through the website form.</p>
          </div>

          <div className="card">
            <strong>2. Review & Screening</strong>
            <p>We review the information provided to ensure the housing environment is an appropriate fit.</p>
          </div>

          <div className="card">
            <strong>3. Placement Discussion</strong>
            <p>If appropriate, we follow up to discuss details, expectations, and potential availability.</p>
          </div>

          <div className="card">
            <strong>4. Move-In Coordination</strong>
            <p>Once approved, we coordinate move-in details and orientation to the home guidelines.</p>
          </div>

        </div>

      </div>
    </section>
  );
}