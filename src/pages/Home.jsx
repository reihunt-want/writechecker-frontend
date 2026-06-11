import React from "react";
import Hero from "../components/Hero";
import { 
  ShieldCheck, Cpu, Target, Highlighter, RefreshCw, FileDown, 
  FileText, Play, CheckCircle2, Award 
} from "lucide-react";

const features = [
  { icon: <ShieldCheck className="text-indigo-600" />, title: "Deteksi AI", desc: "Menganalisis teks menggunakan representasi probabilitas semantik canggih." },
  { icon: <Cpu className="text-purple-600" />, title: "Skor Keaslian", desc: "Memberikan rasio matematis komparatif yang presisi antara mesin dan manusia." },
  { icon: <Target className="text-emerald-600" />, title: "Confidence Score", desc: "Mengukur tingkat kepastian sistem analitik terhadap hasil deteksi akhir." },
  { icon: <Highlighter className="text-orange-600" />, title: "Highlight Kalimat AI", desc: "Menyoroti bagian tulisan dengan gradasi warna berbasis tingkat risiko indikasi AI." },
  { icon: <RefreshCw className="text-blue-600" />, title: "Saran Parafrase", desc: "Menyediakan alternatif susunan kalimat otomatis agar terdengar lebih organis." },
  { icon: <FileDown className="text-rose-600" />, title: "Export Laporan", desc: "Simpan hasil audit teks ke dalam berkas berkualifikasi industri dalam sekali klik." }
];

export default function Home({ setPage }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero setPage={setPage} />

      {/* Section Fitur */}
      <section id="fitur" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200/60">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Fitur Utama Ekosistem WriteChecker
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Dipersenjatai dengan matriks analisis unik yang tidak dimiliki oleh pendeteksi standar lainnya di pasar global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-slate-50 group-hover:bg-indigo-50 rounded-xl w-fit mb-5 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cara Kerja */}
      <section id="alur" className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Pipeline Sistem</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">Alur Kerja Evaluasi Teks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { num: "01", t: "Unggah / Paste Konten", d: "Tempel berkas teks murni atau seret dokumen .pdf, .docx, dan .txt." },
              { num: "02", t: "Eksekusi Deep Scan", d: "Mesin simulasi mengukur metrik keaslian bahasa secara masif." },
              { num: "03", t: "Analisis Visualisasi", d: "Lihat klaster kode warna penanda kalimat AI dan kalkulasi grafik radar." },
              { num: "04", t: "Parafrase Instan", d: "Terapkan saran rekonstruksi kalimat natural bertenaga asisten internal." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl relative">
                <span className="text-5xl font-black text-indigo-500/20 absolute top-4 right-4">{step.num}</span>
                <h3 className="text-lg font-bold mt-4 mb-2">{step.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik Counter Simulation */}
      <section id="statistik" className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-white border border-slate-200/80 p-10 rounded-3xl shadow-xl shadow-slate-100">
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">10.000+</h3>
            <p className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-wider">Dokumen Teranalisis</p>
          </div>
          <div className="border-y sm:border-y-0 sm:border-x border-slate-200 py-6 sm:py-0">
            <h3 className="text-4xl md:text-5xl font-black text-purple-600 tracking-tight">95%</h3>
            <p className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-wider">Tingkat Akurasi Matriks</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">500+</h3>
            <p className="text-slate-500 text-sm font-medium mt-2 uppercase tracking-wider">Pengguna Aktif</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 px-6 py-12 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 WRITECHECKER - Kelompok K.</p>
          <div className="flex gap-6 font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600">Tentang Kami</a>
            <a href="#" className="hover:text-indigo-600">Kontak</a>
            <a href="#" className="hover:text-indigo-600">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}