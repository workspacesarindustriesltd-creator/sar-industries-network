import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The requested dashboard resource does not exist.</p>
        <Link href="/">Return to dashboard</Link>
      </div>
    </main>
  );
}
