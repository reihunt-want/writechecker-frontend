import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("home"); // 'home' atau 'dashboard'

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-600/20">
      <Navbar setPage={setPage} />
      
      {page === "home" ? (
        <Home setPage={setPage} />
      ) : (
        <Dashboard setPage={setPage} />
      )}
    </div>
  );
}