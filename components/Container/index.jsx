export default function Container({ children }) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-white/95 shadow-sm ring-1 ring-border/70">
      {children}
    </main>
  );
}
