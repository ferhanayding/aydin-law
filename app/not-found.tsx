// Dil önekiyle eşleşmeyen yollar için yedek 404 sayfası.
// (Root layout <html> üretmediği için burada tam belge döndürülür.)
import Link from "next/link";
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          background: "#f8f4f0",
          color: "#2a2326",
          fontFamily: "Georgia, serif",
          textAlign: "center",
        }}
      >
        <div>
          <p style={{ color: "#7e525c", fontSize: 13, fontFamily: "system-ui, sans-serif" }}>404</p>
          <h1 style={{ fontWeight: 500 }}>Sayfa bulunamadı</h1>
          <Link href="/" style={{ color: "#7e525c" }}>
            Ana sayfaya dön
          </Link>
        </div>
      </body>
    </html>
  );
}
