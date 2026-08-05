"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-card">
        <p className="eyebrow">Dashboard error</p>
        <h1>Something went wrong</h1>
        <p>The incident has been captured. Retry the current operation.</p>
        <button onClick={reset} type="button">Retry</button>
      </div>
    </main>
  );
}
