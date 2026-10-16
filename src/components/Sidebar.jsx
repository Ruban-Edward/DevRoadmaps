import { useState } from "react";
import { Search, BookOpen, Circle, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar({ roadmap, track, currentId, done, onSelect, query, setQuery, total, searchRef, open }) {
  const [collapsed, setCollapsed] = useState({});
  const q = query.trim().toLowerCase();
  const sections = roadmap
    .map((s, i) => ({ s, i, topics: s.topics.filter((t) => !q || (t.title + " " + t.summary + " " + (t.syntax || "")).toLowerCase().includes(q)) }))
    .filter((x) => x.topics.length);
  const isOpen = (s) => (q ? true : collapsed[s.id] === undefined ? s.topics.some((t) => t.id === currentId) : !collapsed[s.id]);
  return (
    <aside className={"side" + (open ? " open" : "")}>
      <div className="eyebrow">YOUR LEARNING PATH</div>
      <h2>{track === "git-github" ? "Git & GitHub, step by step." : track === "docker" ? "Docker, step by step." : track === "linux" ? "Linux, step by step." : "Python, step by step."}</h2>
      <p className="sub">Short notes for the concepts you want to remember.</p>
      <label className="search">
        <Search size={15} />
        <input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a topic…" />
        <kbd>/</kbd>
      </label>
      <button className="all" onClick={() => setQuery("")}><BookOpen size={16} /> All topics <span>{total}</span></button>
      <div className="eyebrow sm">ROADMAP</div>
      {sections.map(({ s, i, topics }) => {
        const op = isOpen(s);
        return (
          <div key={s.id} className="sec">
            <button className="sec-h" onClick={() => setCollapsed({ ...collapsed, [s.id]: op })}>
              <em>{String(i + 1).padStart(2, "0")}</em><span>{s.title}</span>{op ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
            </button>
            {op && (
              <ul>
                {topics.map((t) => (
                  <li key={t.id}>
                    <button className={t.id === currentId ? "cur" : ""} onClick={() => onSelect(t.id)}>
                      {done[t.id] ? <CheckCircle2 size={15} className="ok" /> : <Circle size={15} />}<span>{t.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
      {!sections.length && <p className="sub">No topics match “{query}”.</p>}
    </aside>
  );
}
