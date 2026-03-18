export default function PropertyOwners() {
  return (
    <section
      className="fade-in"
      id="property-owners"
      style={{
        padding: "90px 20px",
        backgroundColor: "#F4F6F8",
        scrollMarginTop: "110px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#B68C35",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "14px",
            fontWeight: 700,
          }}
        >
          For Property Owners
        </p>

        <h2
          style={{
            fontSize: "42px",
            lineHeight: 1.15,
            marginBottom: "20px",
            color: "#1E2A3A",
          }}
        >
          Professionally managed shared housing with structure and accountability
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TrueNorth Haven Living partners with property owners to provide
          structured shared housing in clean, respectful, and well-managed
          residential environments.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {[
            "Structured resident screening and placement review",
            "Clear house rules and household expectations",
            "Routine property inspections and oversight",
            "Clean and organized living environments",
            "Stable occupancy and consistent rent structure",
            "Respect for neighbors and surrounding community",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                padding: "26px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            maxWidth: "820px",
            margin: "34px auto 0 auto",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            fontFamily: "Arial, sans-serif",
          }}
        >
          We aim to maintain calm, structured homes that protect property
          condition while supporting residents working toward stability and
          independence.
        </p>

        <div style={{ marginTop: "34px" }}>
          <a
            href="#contact"
            style={{
              backgroundColor: "#D8B25A",
              color: "#1E2A3A",
              padding: "15px 30px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontFamily: "Arial, sans-serif",
              display: "inline-block",
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
