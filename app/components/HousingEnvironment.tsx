export default function HousingEnvironment() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center"
      }}
    >
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>

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
          Housing Environment
        </p>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            color: "#1E2F45"
          }}
        >
          A calm, structured living environment
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            lineHeight: 1.8,
            maxWidth: "820px",
            margin: "0 auto 40px auto"
          }}
        >
          TrueNorth Haven Living provides shared housing designed to promote
          stability, independence, and personal progress. Our homes are
          structured, peaceful environments where residents can focus on
          rebuilding routines and moving forward in a supportive community.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "950px",
            margin: "0 auto"
          }}
        >
          {[
            "Clean, comfortable shared living spaces",
            "Structured house expectations and routines",
            "Quiet, respectful home environment",
            "Residents focused on stability and independence",
            "Supportive community atmosphere",
            "Environment designed for personal progress"
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "18px",
                padding: "24px",
                fontSize: "16px",
                color: "#333",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
              }}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}