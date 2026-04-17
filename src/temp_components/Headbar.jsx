import tokens from "../styles/tokens";
import logoSrc from "../assets/logo.svg";

// Headbar

export default function Headbar() {
  return (
    <nav
      aria-label="Main navigation"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "28px 40px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <a
        href="/"
        aria-label="Slaice home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
      >
        {/* Dark rounded-square logo container */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: tokens.ink,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src="logo.svg"
            alt="Slaice logo mark"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
            // Hide the <img>
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        {/* Wordmark */}
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.25rem",
            fontWeight: 500,
            color: tokens.ink,
            letterSpacing: "-0.01em",
          }}
        >
          Slaice
        </span>
      </a>
    </nav>
  );
}