import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 15,
            letterSpacing: 1,
            color: "#F5F1E8",
          }}
        >
          APK
        </span>
        <div
          style={{
            marginTop: 2,
            width: 16,
            height: 2,
            background: "#D4AF37",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
