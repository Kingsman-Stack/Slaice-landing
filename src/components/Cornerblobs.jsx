import tokens from "../styles/tokens";

// CornerBlobs

export default function CornerBlobs() {
  const base = {
    position: "fixed",
    borderRadius: "50%",
    background: tokens.bgBlob,
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.85,
  };

  return (
    <>
      <div aria-hidden="true" style={{ ...base, width: 220, height: 220, top:    -80,  left:  -80  }} />
      <div aria-hidden="true" style={{ ...base, width: 280, height: 280, top:   -110,  right: -100 }} />
      <div aria-hidden="true" style={{ ...base, width: 200, height: 200, bottom:  -80, left:  -70  }} />
      <div aria-hidden="true" style={{ ...base, width: 240, height: 240, bottom:  -90, right: -80  }} />
    </>
  );
}