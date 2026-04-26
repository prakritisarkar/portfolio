"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: "linear-gradient(to top, #030712, transparent)",
        }}
      />
      {/* Floating blobs */}
      <div
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-[60%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
