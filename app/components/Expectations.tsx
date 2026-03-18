export default function Expectations() {
  return (
    <section
      className="fade-in"
      id="expectations"
      style={{
        padding: "90px 20px",
        backgroundColor: "#F7F2EA",
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
          Resident Expectations
        </p>

        <h2
          style={{
            fontSize: "42px",
            lineHeight: 1.15,
            marginBottom: "20px",
            color: "#1E2A3A",
          }}
        >
          A Structured Living Environment Built on Accountability and Respect
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px auto",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4A4A4A",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TrueNorth Haven Living maintains a calm, organized, and respectful
          shared housing environment. Residents are expected to follow clear
          household guidelines and contribute to a stable and cooperative
          living atmosphere.
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
            "Maintain a clean and respectful living environment",
            "Follow all house guidelines, rules, and quiet hours",
            "Respect other residents and shared common areas",
            "Remain focused on stability, routine, and personal responsibility",
            "Communicate appropriately with house management",
            "Contribute to a peaceful, structured, and supportive home",
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
      </div>
    </section>
  );
}
