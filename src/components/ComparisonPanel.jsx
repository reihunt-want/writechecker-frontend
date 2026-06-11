import React from "react";
import { HelpCircle, BarChart3 } from "lucide-react";

export default function ComparisonPanel({ reasons }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={18} className="text-purple-600" />
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Mengapa Terdeteksi Tulisan AI?</h3>
      </div>
      
      <div className="space-y-4">
        {reasons.map((r, idx) => (
          <div key={idx} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="text-xs font-mono font-bold bg-purple-100 text-purple-700 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">{r.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}