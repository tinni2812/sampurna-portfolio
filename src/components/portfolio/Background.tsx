export function AnimatedBackground() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.68_0.21_275/0.18),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.72_0.2_310/0.15),transparent_50%),radial-gradient(circle_at_50%_90%,oklch(0.7_0.19_220/0.15),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:8s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/60 animate-float-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}
