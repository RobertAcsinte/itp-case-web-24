'use client';
 
export default function Error({
  reset,
}: {
  reset: () => void;
}) {

 
  return (
    <main className="wrapper-center">
        <section className="error-wrapper" aria-live="assertive">
            <h1>Something went wrong</h1>
            <button onClick={() => reset()} aria-label="Try again">Try again</button>
        </section>
    </main>
  );
}
