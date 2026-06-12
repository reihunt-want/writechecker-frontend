const API_URL = "/api"; // lewat proxy Vite

export async function analyzeText(text) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || `HTTP error ${response.status}`);
  }

  return await response.json();
  // Returns: { ai_probability, human_probability, label, confidence }
}

export async function analyzeFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || `HTTP error ${response.status}`);
  }
  return response.json();
}

export async function checkHealth() {
  const response = await fetch(`${API_URL}/health`);
  if (!response.ok) throw new Error("Backend tidak dapat dijangkau");
  return await response.json();
  // Returns: { status: "ok", model_loaded: true/false }
}