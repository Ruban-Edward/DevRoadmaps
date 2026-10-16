import { useState } from "react";
export default function CopyButton({ text, label = "Copy code" }) {
  const [state, setState] = useState("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("ok");
    } catch {
      setState("fail"); // clipboard API unavailable (e.g. insecure context) — tell the user instead of failing silently
    }
    setTimeout(() => setState("idle"), 1400);
  };
  return (
    <button className="copy" onClick={copy} aria-live="polite">
      {state === "ok" ? "Copied!" : state === "fail" ? "Press Ctrl/⌘+C" : label}
    </button>
  );
}
