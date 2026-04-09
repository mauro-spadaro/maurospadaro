import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mauro Spadaro — Product Manager & Writer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C1C5A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Mauro Spadaro
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Product Manager · Writing about tech, product & fintech
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          maurospadaro.com
        </div>
      </div>
    ),
    { ...size }
  );
}
