import React from "react";
import { Cpu, Fingerprint } from "lucide-react";

export default function FingerprintAnalysis({ data }) {
  const metrics = [
    { label: "Predictability Score", value: data.predictabilityScore, desc: "Tingkat keterdugaan kata berikutnya." },
    { label: "Burstiness Score", value: data.burstinessScore, desc: "Variasi dalam panjang dan struktur kalimat." },
    { label: "Perplexity Score", value: data.perplexityScore, desc: "Kompleksitas acak susunan kosakata kamus." },
    { label: "Repetition Score", value: data.repetitionScore, desc: "Frekuensi pengulangan pola sintaksis pasif." },
    { label: "Human Authenticity", value: data.humanAuthenticityScore, desc: "Tanda sidik jari keunikan kognisi manusia." }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute -right-6 -bottom-6 text-indigo-500/10 pointer-events-none">
        <Fingerprint size={120} />
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/30">
          <Fingerprint size={18} />
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">AI Fingerprint Analysis</h3>
          <p className="text-[11px] text-indigo-300">Fitur Unggulan Identifikasi Karakteristik Mesin</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {metrics.map((m, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-300">{m.label}</span>
              <span className="font-mono text-indigo-400 font-bold">{m.value}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700/50">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-1000"
                style={{ width: `${m.value}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}