import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #2563EB 0%, #14B8A6 100%)",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 900,
            color: "white",
            marginBottom: 30,
          }}
        >
          B
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "#F8FAFC",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Boyzeth Solutions
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94A3B8",
            textAlign: "center",
          }}
        >
          Web Development & Digital Growth Agency
        </div>
      </div>
    ),
    { ...size }
  )
}
