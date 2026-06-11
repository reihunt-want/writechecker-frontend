import React from "react";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Navbar({ setPage }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage("home")}>
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-xl text-white shadow-md shadow-indigo-200">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-900 bg-clip-text text-transparent tracking-tight">
            WRITE<span className="text-indigo-600">CHECKER</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#fitur" className="hover:text-indigo-600 transition-colors">Fitur</a>
          <a href="#alur" className="hover:text-indigo-600 transition-colors">Cara Kerja</a>
          <a href="#statistik" className="hover:text-indigo-600 transition-colors">Statistik</a>
        </div>

        <button 
          onClick={() => setPage("dashboard")}
          className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm flex items-center gap-2"
        >
          <Cpu size={16} />
          Mulai Analisis
        </button>
      </div>
    </nav>
  );
}