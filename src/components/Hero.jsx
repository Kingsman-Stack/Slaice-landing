import tokens from "../styles/tokens";
import WaitlistButton from "./WaitlistButton";

// Hero

export default function Hero() {
  return (
    <main
      role="main"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px 0",
        maxWidth: 900,
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          // clamp: scales smoothly from mobile → desktop
          fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: tokens.ink,
          animation: "fadeUp 0.8s ease both",
        }}
      >
        Invest in real<br />estate,<br />from £10
      </h1>

      {/* CTA */}
      <div
        style={{
          marginTop: 40,
          animation: "fadeUp 0.8s 0.2s ease both",
        }}
      >
        <WaitlistButton />
      </div>

      {/* Descriptor */}
      <p
        style={{
          marginTop: 48,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          fontWeight: 300,
          color: tokens.inkMuted,
          maxWidth: 520,
          lineHeight: 1.65,
          animation: "fadeUp 0.8s 0.35s ease both",
        }}
      >
        Invest in rental properties and receive rent monthly like a landlord.
        From as little as £10.
      </p>
    </main>
  );
}