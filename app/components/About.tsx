export default function About() {
  return (
    <section
      className="fade-in"
      id="about-section"
      style={{
        backgroundColor: "#F4F6F8",
        padding: "100px 20px",
        textAlign: "center",
        scrollMarginTop: "120px",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p
          style={{
            color: "#C9A449",
            letterSpacing: "3px",
            fontWeight: 600,
            marginBottom: "12px",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          About TrueNorth Haven Living
        </p>

        <h2
          style={{
            fontSize: "42px",
            color: "#1E2F45",
            marginBottom: "30px",
          }}
        >
          A Stable Path Forward
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TrueNorth Haven Living provides structured, non-medical shared housing
          for adults who are capable of independent living but benefit from a
          stable, supportive, and respectful residential environment.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our homes are designed to promote accountability, consistency, and
          independence while maintaining a calm and organized household
          structure. We serve adults who benefit from routine, personal
          responsibility, and a cooperative shared living environment.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          We welcome individuals who are able to live independently and
          participate in a structured household community. TrueNorth Haven
          Living does not provide medical care, clinical supervision, behavioral
          intervention services, or intensive personal care.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TrueNorth Haven Living works with individuals, referral partners, case
          managers, and placement programs. We accept residents whose housing is
          supported through verified personal income, agency placements,
          approved government or program funding, housing vouchers, and similar
          assistance sources.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            lineHeight: 1.8,
            fontFamily: "Arial, sans-serif",
          }}
        >
          All placements require a reliable and consistent payment arrangement
          prior to move-in. Our goal is to maintain a stable and respectful
          living environment where each resident has the opportunity to focus on
          progress, responsibility, and long-term independence.
        </p>
      </div>
    </section>
  );
}
