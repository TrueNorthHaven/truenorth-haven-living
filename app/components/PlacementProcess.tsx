export default function PlacementProcess() {
  return (
    <section
      id="placement-process"
      style={{
        padding: "90px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
        scrollMarginTop: "110px",
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
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Placement Process
        </p>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "25px",
            color: "#1E2F45",
          }}
        >
          A Simple and Structured Path to Placement
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            lineHeight: 1.8,
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our goal is to ensure that each placement is an appropriate fit for
          both the resident and the household environment. The following steps
          outline our typical placement process.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div className="card">
            <strong>1. Submit Placement Inquiry</strong>
            <p>
              A referral partner or individual submits a placement inquiry for
              housing consideration.
            </p>
          </div>

          <div className="card">
            <strong>2. Application & Screening Review</strong>
            <p>
              We review the information provided to determine whether the shared
              housing environment is an appropriate fit.
            </p>
          </div>

          <div className="card">
            <strong>3. Approval & Housing Match</strong>
            <p>
              If appropriate, we follow up to discuss availability,
              expectations, funding, and next-step placement details.
            </p>
          </div>

          <div className="card">
            <strong>4. Move-In Coordination</strong>
            <p>
              Once approved, we coordinate move-in details and orientation to
              the home guidelines and expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
