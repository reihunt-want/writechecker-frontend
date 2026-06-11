import React from "react";
import { FileDown, Code, Share2 } from "lucide-react";

export default function ExportPanel() {
  const alertAction = (type) => {
    alert(`[Simulasi Berhasil] Berkas laporan format ${type} berhasil digenerate dan diunduh.`);
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-wrap gap-3 justify-between items-center">
      <div>
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Audit & Ekspor Data</h4>
        <p className="text-[11px] text-slate-400 mt-0.5">Mendukung arsip laporan formal akademik</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => alertAction("PDF")}
          className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5"
        >
          <FileDown size={14} /> Download PDF Report
        </button>
        <button 
          onClick={() => alertAction("JSON")}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5"
        >
          <Code size={14} /> Download JSON
        </button>
        <button 
          onClick={() => alertAction("Share Link")}
          className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5"
        >
          <Share2 size={14} /> Share Result
        </button>
      </div>
    </div>
  );
}