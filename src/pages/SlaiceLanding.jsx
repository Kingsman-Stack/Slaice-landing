import tokens from "../styles/tokens";
import CornerBlobs from "../components/CornerBlobs";
import Headbar from "../components/Headbar";
import Hero from "../components/Hero";

// SlaiceLanding

export default function SlaiceLanding() {
  return (
    <>
      {/* Global styles + font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: ${tokens.bg}; min-height: 100vh; overflow-x: hidden; }

        /* Shared fade-up entrance animation used by Hero children */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <CornerBlobs />

      {/* Page layout */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: tokens.bg,
        }}
      >
        <Headbar />
        <Hero />
      </div>
    </>
  );
}