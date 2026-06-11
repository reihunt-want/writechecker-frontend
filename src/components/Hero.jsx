import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, FileText } from "lucide-react";

export default function Hero({ setPage }) {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-30 blur-3xl">
        <div className="absolute top-12 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter animate-pulse-slow"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter animate-pulse-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm"
        >
          <Sparkles size={14} className="animate-spin-slow" />
          Prototipe Kelompok K
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6"
        >
          Deteksi Teks AI dengan <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Tingkat Kepercayaan Tinggi
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Analisis teks, identifikasi bagian yang kemungkinan dibuat AI, dan tingkatkan kualitas tulisan Anda dalam hitungan detik dengan transparansi forensik bahasa.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => setPage("dashboard")}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 group text-base"
          >
            Mulai Analisis 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#fitur"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-8 py-4 rounded-2xl transition-all shadow-sm block text-center"
          >
            Lihat Fitur Utama
          </a>
        </motion.div>
      </div>

      {/* Mockup Preview Visualisasi */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-16 border border-slate-200/80 bg-white/60 rounded-2xl p-4 shadow-2xl glass-card relative"
      >
        <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <span className="text-xs text-slate-400 ml-2 font-mono">writechecker-analysis-preview.xlsx</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
          <div className="md:col-span-2 space-y-3 bg-white p-4 rounded-xl border border-slate-100">
            <div className="h-4 bg-orange-100 border-l-4 border-orange-500 rounded p-1 w-full text-[11px] font-medium text-orange-800">Kecerdasan buatan berkembang pesat di era teknologi modern...</div>
            <div className="h-4 bg-yellow-100 border-l-4 border-yellow-500 rounded p-1 w-[85%] text-[11px] font-medium text-yellow-800">Oleh karena itu banyak korporasi mulai menggunakannya...</div>
            <div className="h-4 bg-emerald-100 border-l-4 border-emerald-500 rounded p-1 w-[90%] text-[11px] font-medium text-emerald-800">Namun, interaksi emosional manusia sejati tidak tergantikan...</div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">AI Probability</p>
              <h3 className="text-3xl font-black text-orange-400">74%</h3>
            </div>
            <div className="text-[11px] text-slate-300 border-t border-slate-800 pt-2">
              <CheckCircle size={12} className="inline mr-1 text-emerald-400" /> Analisis Forensik Siap
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}