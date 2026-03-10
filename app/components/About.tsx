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
          TrueNorth Haven Living provides structured supportive housing designed
          to help individuals regain stability, rebuild independence, and move
          forward with confidence. Our homes are designed for adults who
          benefit from routine, accountability, and a calm, respectful shared
          living environment.
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
          We welcome individuals who are able to live independently while
          participating in a structured household community. While some
          residents may experience mild mental health challenges, our housing
          model is best suited for individuals who do not require medical
          supervision, behavioral intervention services, or intensive clinical
          care.
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
          TrueNorth Haven Living works with a variety of referral partners and
          placement programs. We accept residents whose housing is supported
          through verified income sources, agency placements, or approved
          government and program funding, including housing vouchers and
          similar assistance programs.
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
          through personal income, program support, or agency funding prior to
          move-in. Our goal is to maintain a stable and respectful living
          environment where every resident has the opportunity to focus on
          progress, responsibility, and long-term independence.
        </p>
      </div>
    </section>
  );
}