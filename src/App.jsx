import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { roadmap } from "./data/roadmap.js";
import { TRACKS, trackById } from "./tracks.js";
import Sidebar from "./components/Sidebar.jsx";
import TopicPage from "./components/TopicPage.jsx";
import HomePage from "./components/HomePage.jsx";

const trackRoadmaps = Object.fromEntries(
  TRACKS.filter((t) => t.active).map((t) => [
    t.id,
    roadmap.filter((s) => (s.track || "python") === t.id),
  ]),
);
const flat = Object.entries(trackRoadmaps).flatMap(([track, sections]) =>
  sections.flatMap((section, sectionIndex) => section.topics.map((t) => ({ ...t, section, sectionIndex, track }))),
);
const flatIds = new Set(flat.map((t) => t.id));

// Legacy key: kept as-is so progress saved by earlier versions is not lost.
const KEY = "python-roadmap-progress";

const fromHash = () => {
  let id = "";
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { /* malformed hash, fall back to home */ }
  return flatIds.has(id) ? id : "home";
};
const loadDone = () => {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "{}");
    return v && typeof v === "object" && !Array.isArray(v) ? v : {};
  } catch { return {}; }
};

export default function App() {
  const [currentId, setCurrentId] = useState(fromHash);
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const [done, setDone] = useState(loadDone);
  const searchRef = useRef(null);
  const mainRef = useRef(null);

  const idx = flat.findIndex((t) => t.id === currentId);
  const topic = flat[idx];
  const onHome = !topic;
  const currentTrack = topic?.track || null;
  const trackMeta = currentTrack ? trackById(currentTrack) : null;
  const trackTopics = useMemo(() => flat.filter((t) => t.track === currentTrack), [currentTrack]);
  const trackIndex = trackTopics.findIndex((t) => t.id === currentId);

  // Progress per track, plus overall.
  const stats = useMemo(() => {
    const out = {};
    for (const t of TRACKS.filter((x) => x.active)) out[t.id] = { done: 0, total: 0 };
    for (const t of flat) { out[t.track].total++; if (done[t.id]) out[t.track].done++; }
    return out;
  }, [done]);
  const overall = useMemo(
    () => Object.values(stats).reduce((a, s) => ({ done: a.done + s.done, total: a.total + s.total }), { done: 0, total: 0 }),
    [stats],
  );
  const scope = onHome ? { ...overall, label: "All paths" } : { ...stats[currentTrack], label: trackMeta.name };
  const pct = scope.total ? Math.round((scope.done / scope.total) * 100) : 0;

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch { /* ignore */ } }, [done]);

  useEffect(() => {
    const onHash = () => setCurrentId(fromHash());
    const onKey = (e) => {
      if (e.key === "Escape") setMenu(false);
      const el = document.activeElement;
      const typing = el && /INPUT|TEXTAREA|SELECT/.test(el.tagName);
      // "/" focuses search, but only where a search box exists (never swallow it on the home page).
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey && searchRef.current) {
        e.preventDefault();
        searchRef.current.focus();
      }
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("keydown", onKey); };
  }, []);

  // Runs for every navigation (links, back/forward, buttons): reset scroll, close menu, update tab title.
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
    setMenu(false);
    document.title = topic ? `${topic.title} · ${trackMeta.name} · build.roadmaps` : "build.roadmaps";
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { setQuery(""); }, [currentTrack]);

  const go = (id) => { location.hash = id; };
  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));

  return (
    <div className="app" data-track={currentTrack || "python"}>
      <header className="top">
        {!onHome && (
          <button className="burger" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu}>
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
        <button className="brand-home" onClick={() => go("home")} aria-label="Go to learning paths">
          <span className="logo"><Code2 size={20} /></span>
          <span><b>build.roadmaps</b><small>LEARN · RECALL · PRACTISE</small></span>
        </button>
        <div className="prog" role="group" aria-label={`${scope.label} progress`}>
          <div><span><em>{scope.label}</em> {scope.done} / {scope.total} topics</span><b>{pct}%</b></div>
          <i><u style={{ width: pct + "%" }} /></i>
        </div>
      </header>
      <div className="body">
        {!onHome && (
          <>
            <Sidebar roadmap={trackRoadmaps[currentTrack]} track={trackMeta} currentId={currentId} done={done} onSelect={go}
              query={query} setQuery={setQuery} total={trackTopics.length} searchRef={searchRef} open={menu} />
            {menu && <button className="backdrop" aria-label="Close menu" onClick={() => setMenu(false)} />}
          </>
        )}
        <main ref={mainRef} className={onHome ? "home-main" : ""}>
          {onHome ? <HomePage stats={stats} overall={overall} /> : (
            <TopicPage topic={topic} track={trackMeta} section={topic.section} sectionIndex={topic.sectionIndex} done={!!done[topic.id]}
              onToggle={toggle} prev={trackTopics[trackIndex - 1]} next={trackTopics[trackIndex + 1]} onGo={go} />
          )}
        </main>
      </div>
    </div>
  );
}
