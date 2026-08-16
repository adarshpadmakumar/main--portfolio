"use client";

export default function CookiePreferencesButton({
  className = "text-cream/[0.72] hover:text-gold",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("open-cookie-preferences"))
      }
      className={className}
    >
      Cookie preferences
    </button>
  );
}
