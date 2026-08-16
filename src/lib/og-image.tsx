export function ogImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#0F2E23",
        padding: "80px 90px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: 2,
            color: "#F5F1E8",
          }}
        >
          APK
        </span>
        <span style={{ width: 1, height: 34, background: "rgba(245,241,232,0.28)" }} />
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 26,
            color: "#F5F1E8",
          }}
        >
          Adarsh P Kumar
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontFamily: "Georgia, serif",
          fontSize: 58,
          lineHeight: 1.15,
          color: "#F5F1E8",
          maxWidth: 920,
        }}
      >
        Freelance project manager for web, UI/UX, SaaS, and AI projects.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          width: 90,
          height: 4,
          background: "#D4AF37",
        }}
      />
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontFamily: "Georgia, serif",
          fontSize: 24,
          color: "#D4AF37",
        }}
      >
        140+ projects shipped · 13 years experience · 98% client retention
      </div>
    </div>
  );
}
