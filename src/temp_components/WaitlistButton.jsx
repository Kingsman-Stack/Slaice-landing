import { useState } from "react";
import tokens from "../styles/tokens";
import BellIcon from "./BellIcon";

// WaitlistButton
// Pill-shaped CTA. Opens the Jotform waitlist in a new tab on click.

const WAITLIST_FORM_URL = "https://form.jotform.com/252546516537361";

export default function WaitlistButton() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    // noopener,noreferrer: prevents the new tab from accessing window.opener
    
    window.open(WAITLIST_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label="Join the Slaice waitlist — opens in a new tab"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: pressed ? "#444" : hovered ? "#333" : tokens.pillBg,
        color: tokens.pillText,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 400,
        letterSpacing: "0.01em",
        padding: "14px 28px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        transform: pressed ? "scale(0.97)" : hovered ? "scale(1.03)" : "scale(1)",
        transition: "background 0.2s ease, transform 0.15s ease",
        outline: "none",
      }}
    >
      <BellIcon />
      Join Waitlist
    </button>
  );
}