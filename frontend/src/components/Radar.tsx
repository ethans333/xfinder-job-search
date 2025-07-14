export default function Radar() {
  return (
    <div className="relative w-22 h-22">
      {/* Radar Pulse */}
      <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping"></div>
      <div className="absolute inset-4 rounded-full border-6 border-emerald-500 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full border-4 border-emerald-400"></div>

      {/* Sweeping Line */}
      <div className="absolute left-1/2 top-1/2 w-1/2 h-[3.5px] bg-emerald-300 origin-left animate-spin rounded-full"></div>
    </div>
  );
}
