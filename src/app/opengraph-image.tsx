import { ImageResponse } from "next/og";

export const alt = "Bista Creation — custom songs and cinematic music videos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05050a",
          backgroundImage:
            "linear-gradient(135deg, #0b0b16 0%, #05050a 55%, #15101a 100%)",
          padding: "70px 76px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            border: "1px solid rgba(233,200,119,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: 999,
            border: "1px solid rgba(205,184,255,0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 999,
              border: "2px solid #e9c877",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4dc9d",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: 22,
                letterSpacing: 7,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Bista Creation
            </div>
            <div
              style={{
                color: "#adbacd",
                fontSize: 15,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Music studio · Nepal
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 34, height: 1, backgroundColor: "#e9c877" }} />
            <div
              style={{
                color: "#f4dc9d",
                fontSize: 18,
                letterSpacing: 5,
                textTransform: "uppercase",
              }}
            >
              Custom songs · Cinematic videos
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              Himalayan soul.
            </div>
            <div
              style={{
                color: "#e9c877",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              Cinematic sound.
            </div>
          </div>
          <div style={{ color: "#c9d3e2", fontSize: 25, marginTop: 24 }}>
            Custom songs and music videos, made in Nepal for the world.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
          }}
        >
          <div style={{ color: "#dfe7f2", fontSize: 20 }}>
            bista-creation.vercel.app
          </div>
          <div
            style={{
              color: "#adbacd",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Suno AI Pro · Google Flow
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
