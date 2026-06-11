import React, { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function SuggestionPanel({ suggestions, onApplySuggestion }) {
  const [appliedIds, setAppliedIds] = useState([]);

  const handleApply = (id, fixedText) => {
    setAppliedIds((prev) => [...prev, id]);
    onApplySuggestion(id, fixedText);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="text-indigo-600 animate-pulse" size={18} />
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Saran Parafrase Otomatis</h3>
      </div>

      <div className="space-y-4">
        {suggestions.map((item) => {
          const isApplied = appliedIds.includes(item.id);
          return (
            <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-50/30">
              <div className="grid grid-cols-1 md:grid-cols-2 text-xs divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-4">
                  <span className="px-2 py-0.5 bg-rose-50 text-rose-600 font-bold rounded text-[10px] uppercase mb-2 inline-block">Asli (Terindikasi AI)</span>
                  <p className="text-slate-600 italic leading-relaxed">"{item.original}"</p>
                </div>
                <div className="p-4 bg-indigo-50/20">
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 font-bold rounded text-[10px] uppercase mb-2 inline-block">Rekomendasi Humanis</span>
                  <p className="text-indigo-950 font-medium leading-relaxed">"{item.suggested}"</p>
                </div>
              </div>
              
              <div className="bg-slate-50 px-4 py-2 flex justify-end border-t border-slate-200/60">
                <button
                  onClick={() => handleApply(item.id, item.fixedSegmentText)}
                  disabled={isApplied}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isApplied 
                      ? "bg-emerald-100 text-emerald-700" 
                      : "bg-slate-900 text-white hover:bg-indigo-600 shadow-sm"
                  }`}
                >
                  {isApplied ? (
                    <>
                      <Check size={12} /> Diterapkan
                    </>
                  ) : (
                    <>
                      Terapkan Saran <ArrowRight size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}