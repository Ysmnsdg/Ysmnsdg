export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-warm-white pt-28">
      <div className="text-center" role="status" aria-live="polite">
        <div className="mx-auto h-px w-16 animate-pulse bg-gold" />
        <p className="mt-6 text-xs uppercase tracking-[0.22em] text-taupe">
          Loading
        </p>
      </div>
    </div>
  );
}
