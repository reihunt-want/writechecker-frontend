import React, { useState } from "react";
import { UploadCloud, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function UploadBox({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) startSimulatedUpload(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) startSimulatedUpload(selectedFile);
  };

  const startSimulatedUpload = (selectedFile) => {
    setFile(selectedFile);
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          // Beri umpan balik ke komponen induk bahwa file terunggah
          onFileSelect(selectedFile);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-6 bg-slate-50/50 hover:bg-indigo-50/10 transition-all text-center cursor-pointer relative group"
    >
      <input 
        type="file" 
        accept=".txt,.docx,.pdf" 
        className="absolute inset-0 opacity-0 cursor-pointer" 
        onChange={handleFileChange}
        disabled={uploading}
      />
      
      {!file && (
        <div className="flex flex-col items-center py-2">
          <div className="p-3 bg-white border border-slate-200 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
            <UploadCloud className="text-slate-500 group-hover:text-indigo-600" size={24} />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-700">Tarik berkas Anda atau klik untuk cari</p>
          <p className="text-xs text-slate-400 mt-1">Mendukung dokumen PDF, DOCX, atau TXT</p>
        </div>
      )}

      {file && (
        <div className="text-left bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 max-w-[180px] truncate">{file.name}</p>
              <p className="text-[10px] text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
          
          <div className="w-24 text-right">
            {uploading ? (
              <div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="text-[9px] font-mono text-indigo-600 font-bold">{progress}%</span>
              </div>
            ) : (
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1 justify-center">
                <CheckCircle size={12} /> Ready
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}