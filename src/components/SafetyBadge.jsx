import { ShieldCheck } from "lucide-react";

function SafetyBadge({ text }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
      <ShieldCheck className="text-tokyoRed" size={20} />
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

export default SafetyBadge;
