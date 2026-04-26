import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
          borderRadius: "40px",
        }}
      >
        {/* House shape — roof */}
        <div style={{ position: "relative", display: "flex", width: 110, height: 90 }}>
          {/* Roof: CSS triangle via borders */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 0,
              height: 0,
              borderLeft: "55px solid transparent",
              borderRight: "55px solid transparent",
              borderBottom: "44px solid white",
            }}
          />
          {/* Building body */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 14,
              width: 82,
              height: 50,
              background: "white",
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 0,
            }}
          >
            {/* Door */}
            <div
              style={{
                width: 26,
                height: 30,
                background: "#818cf8",
                borderRadius: "3px 3px 0 0",
                marginBottom: 0,
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
