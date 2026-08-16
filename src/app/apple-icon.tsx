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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F2E23",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 72,
            letterSpacing: 4,
            color: "#F5F1E8",
          }}
        >
          APK
        </span>
        <div
          style={{
            marginTop: 10,
            width: 84,
            height: 8,
            background: "#D4AF37",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
