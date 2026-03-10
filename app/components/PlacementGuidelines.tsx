export default function PlacementGuidelines() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#F7F2EA",
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
          Placement Guidelines
        </p>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            color: "#1E2F45"
          }}
        >
          Housing best suited for individuals able to live independently
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
          TrueNorth Haven Living provides structured shared housing for adults
          who are able to live independently within a respectful community
          environment. Our homes are designed for individuals who can follow
          household guidelines and maintain a peaceful living atmosphere.
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
            "Residents must be ambulatory and able to care for themselves",
            "No supervision or medical care is provided",
            "Individuals with disruptive or aggressive behaviors may not be appropriate",
            "Residents must be able to follow house guidelines",
            "Stable income or approved funding is required for placement",
            "Environment is designed for independent adults seeking stability"
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#ffffff",
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