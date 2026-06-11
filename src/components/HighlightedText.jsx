import React from "react";
import { AlertCircle, HelpCircle } from "lucide-react";

export default function HighlightedText({ segments }) {
  const getHighlightClass = (type) => {
    switch (type) {
      case "ai": return "bg-orange-100/80 text-orange-900 border-b-2 border-orange-500 cursor-help relative group/item";
      case "warning": return "bg-yellow-100/80 text-yellow-900 border-b-2 border-yellow-500 cursor-help relative group/item";
      default: return "bg-emerald-50/60 text-slate-800 border-b-2 border-emerald-400/50 cursor-help relative group/item";
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Peta Pemindaian Kalimat</h3>
        <div className="flex gap-3 text-[11px] font-medium">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> AI</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Campuran</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Manusia</span>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 min-h-[160px] leading-relaxed text-sm text-slate-700 selection:bg-indigo-200">
        {segments.map((seg) => (
          <span 
            key={seg.id} 
            className={`inline mr-1 px-1 transition-colors py-0.5 rounded ${getHighlightClass(seg.type)}`}
          >
            {seg.text}

            {/* Tooltip Kustom Interaktif */}
            <span className="absolute left-0 top-full mt-2 w-72 bg-slate-900 text-white text-xs rounded-xl p-4 shadow-xl z-30 hidden group-hover/item:block pointer-events-none border border-slate-800 animate-fadeIn">
              <span className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <span className="font-bold text-orange-400">Kemungkinan AI: {seg.aiProbability}%</span>
                <span className="text-slate-400 font-mono text-[10px]">Conf: {seg.confidence}%</span>
              </span>
              <span className="block font-medium text-slate-300 leading-normal">
                <AlertCircle size={12} className="inline mr-1 text-slate-400" /> {seg.reason}
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}