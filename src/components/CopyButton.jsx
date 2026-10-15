import { useState } from "react";
export default function CopyButton({ text, label = "Copy code" }) {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 1200); } catch { /* ignore */ }
  };
  return <button className="copy" onClick={copy}>{ok ? "Copied!" : label}</button>;
}
