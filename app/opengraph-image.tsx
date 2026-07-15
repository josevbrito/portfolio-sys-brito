import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

const tagColors: Record<string, string> = {
  "Laravel":          "#FF2D20",
  "Python":           "#3776AB",
  "Next.js":          "#FFFFFF",
  "Flutter":          "#54C5F8",
  "Machine Learning": "#C084FC",
};

function tagStyle(tag: string) {
  const hex = tagColors[tag] ?? "#00DC82";
  return {
    color:           hex,
    backgroundColor: hex + "1a",
    border:          `1px solid ${hex}40`,
    borderRadius:    6,
    padding:         "7px 16px",
    fontSize:        16,
    display:         "flex",
  };
}

export default function OgImage() {
  const tags = ["Laravel", "Python", "Next.js", "Flutter", "Machine Learning"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050505 0%, #001a10 60%, #050505 100%)",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "monospace",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#00DC82", display: "flex" }} />

        {/* Terminal label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "flex" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "flex" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "flex" }} />
          <div style={{ color: "#00DC82", fontSize: 15, marginLeft: 12, letterSpacing: 2, display: "flex" }}>
            ~/sys.brito
          </div>
        </div>

        {/* Name */}
        <div style={{ color: "#ffffff", fontSize: 86, fontWeight: 900, lineHeight: 1, letterSpacing: -2, display: "flex" }}>
          José Brito
          <span style={{ color: "#00DC82", marginLeft: 4 }}>_</span>
        </div>

        {/* Role */}
        <div style={{ color: "#9ca3af", fontSize: 26, marginTop: 16, marginBottom: 44, display: "flex" }}>
          Software Engineer & Data Scientist
        </div>

        {/* Separator */}
        <div style={{ width: 48, height: 2, background: "#00DC82", marginBottom: 36, display: "flex" }} />

        {/* Tech tags */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <div key={tag} style={tagStyle(tag)}>
              {tag}
            </div>
          ))}
        </div>

        {/* URL watermark */}
        <div style={{ position: "absolute", bottom: 48, right: 80, color: "#374151", fontSize: 15, display: "flex" }}>
          josevbrito.com
        </div>

        {/* Bottom accent bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(0,220,130,0.2)", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
