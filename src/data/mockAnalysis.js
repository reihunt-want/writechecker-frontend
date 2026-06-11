export const mockDemoData = {
  text: "Kecerdasan buatan atau AI berkembang sangat pesat di era digital saat ini. Teknologi ini mampu mengotomatisasi berbagai pekerjaan manusia dengan efisiensi yang sangat tinggi. Oleh karena itu, banyak perusahaan besar mulai mengadopsi sistem ini untuk meningkatkan produktivitas mereka. Penggunaan algoritma canggih memungkinkan analisis data dalam skala besar dapat dilakukan hanya dalam hitungan detik saja. Namun, di sisi lain, kita juga perlu memperhatikan dampak sosial yang mungkin ditimbulkan. Interaksi manusia yang natural tetap memiliki nilai otentik yang tidak bisa digantikan begitu saja oleh mesin pintar jenis apa pun.",
  
  stats: {
    aiScore: 74,
    humanScore: 26,
    confidenceScore: 92,
    riskLevel: "Tinggi", // Rendah, Sedang, Tinggi
  },
  
  // Membagi teks ke dalam segmen-segmen untuk fitur Highlight Interaktif
  segments: [
    {
      id: 1,
      text: "Kecerdasan buatan atau AI berkembang sangat pesat di era digital saat ini. Teknologi ini mampu mengotomatisasi berbagai pekerjaan manusia dengan efisiensi yang sangat tinggi.",
      type: "ai", // 'ai' (oranye), 'warning' (kuning), 'human' (hijau)
      aiProbability: 88,
      confidence: 94,
      reason: "Struktur kalimat sangat formal, monoton, dan menggunakan pola transisi prediktif khas Large Language Model."
    },
    {
      id: 2,
      text: " Oleh karena itu, banyak perusahaan besar mulai mengadopsi sistem ini untuk meningkatkan produktivitas mereka. Penggunaan algoritma canggih memungkinkan analisis data dalam skala besar dapat dilakukan hanya dalam hitungan detik saja.",
      type: "warning",
      aiProbability: 62,
      confidence: 89,
      reason: "Frasa transisi 'Oleh karena itu' digunakan secara generik dengan variasi panjang klausa yang terlalu seragam."
    },
    {
      id: 3,
      text: " Namun, di sisi lain, kita juga perlu memperhatikan dampak sosial yang mungkin ditimbulkan. Interaksi manusia yang natural tetap memiliki nilai otentik yang tidak bisa digantikan begitu saja oleh mesin pintar jenis apa pun.",
      type: "human",
      aiProbability: 14,
      confidence: 91,
      reason: "Ditemukan variasi gaya bahasa subjektif, struktur sintaksis yang tidak linier, serta pola rima natural manusia."
    }
  ],

  // Data untuk Fitur Saran Parafrase otomatis
  suggestions: [
    {
      id: 101,
      original: "Kecerdasan buatan atau AI berkembang sangat pesat di era digital saat ini. Teknologi ini mampu mengotomatisasi berbagai pekerjaan manusia dengan efisiensi yang sangat tinggi.",
      suggested: "Saat ini, perkembangan kecerdasan buatan (AI) tengah melesat tajam. Kehadirannya mempermudah rutinitas kita lewat otomatisasi sistem kerja yang jauh lebih taktis dan efisien.",
      fixedSegmentText: "Saat ini, perkembangan kecerdasan buatan (AI) tengah melesat tajam. Kehadirannya mempermudah rutinitas kita lewat otomatisasi sistem kerja yang jauh lebih taktis dan efisien."
    },
    {
      id: 102,
      original: "Oleh karena itu, banyak perusahaan besar mulai mengadopsi sistem ini untuk meningkatkan produktivitas mereka. Penggunaan algoritma canggih memungkinkan analisis data dalam skala besar dapat dilakukan hanya dalam hitungan detik saja.",
      suggested: "Kondisi ini mendorong korporasi global berbondong-bondong mengintegrasikan AI demi mendongkrak output kerja. Berkat algoritma mutakhirnya, data raksasa pun bisa dibedah dalam sekejap mata.",
      fixedSegmentText: "Kondisi ini mendorong korporasi global berbondong-bondong mengintegrasikan AI demi mendongkrak output kerja. Berkat algoritma mutakhirnya, data raksasa pun bisa dibedah dalam sekejap mata."
    }
  ],

  // Fitur Unggulan: AI Fingerprint Analysis
  fingerprint: {
    predictabilityScore: 84,
    burstinessScore: 32, // Rendah berarti mencurigakan AI
    perplexityScore: 28, // Rendah berarti mencurigakan AI
    repetitionScore: 76,
    humanAuthenticityScore: 24
  },

  // Komposisi konten chart
  composition: [
    { name: "AI-Generated", value: 65, color: "#f97316" },
    { name: "Uncertain / Mixed", value: 15, color: "#eab308" },
    { name: "Human-written", value: 20, color: "#22c55e" }
  ],

  // Metrik Tulisan Radar Chart
  radarMetrics: [
    { subject: "Readability", A: 85, fullMark: 100 },
    { subject: "Vocabulary Diversity", A: 42, fullMark: 100 },
    { subject: "Sentence Variation", A: 35, fullMark: 100 },
    { subject: "Complexity Score", A: 78, fullMark: 100 },
    { subject: "Grammar Consistency", A: 95, fullMark: 100 }
  ],

  // AI vs Human Comparison
  comparisonReasons: [
    { title: "Struktur Kalimat Terlalu Konsisten", desc: "Panjang kalimat berkisar antara 12-15 kata secara konstan tanpa fluktuasi emosional teks." },
    { title: "Penggunaan Kata Transisi Berulang", desc: "Terlalu sering memunculkan kata hubung formal baku seperti 'Oleh karena itu', 'Namun, di sisi lain'." },
    { title: "Tingkat Prediktabilitas Tinggi", desc: "Pola sekuensial kata berikutnya sangat mudah ditebak oleh distribusi probabilitas model bahasa umum (GPT/Claude)." }
  ]
};