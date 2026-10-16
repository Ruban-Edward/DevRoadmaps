import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { roadmap } from "./data/roadmap.js";
import Sidebar from "./components/Sidebar.jsx";
import TopicPage from "./components/TopicPage.jsx";
import HomePage from "./components/HomePage.jsx";

const trackRoadmaps = {
  python: roadmap.filter((section) => !section.track || section.track === "python"),
  "git-github": roadmap.filter((section) => section.track === "git-github"),
  docker: roadmap.filter((section) => section.track === "docker"),
  linux: roadmap.filter((section) => section.track === "linux"),
};
const flat = Object.entries(trackRoadmaps).flatMap(([track, sections]) =>
  sections.flatMap((section, sectionIndex) => section.topics.map((t) => ({ ...t, section, sectionIndex, track }))),
);
const KEY = "python-roadmap-progress";
const fromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); return flat.some((t) => t.id === id) ? id : "home"; };

export default function App() {
  const [currentId, setCurrentId] = useState(fromHash);
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const [done, setDone] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; } });
  const searchRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch { /* ignore */ } }, [done]);
  useEffect(() => {
    const onHash = () => setCurrentId(fromHash());
    const onKey = (e) => {
      if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); searchRef.current?.focus(); }
    };
    window.addEventListener("hashchange", onHash); window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("keydown", onKey); };
  }, []);

  const go = (id) => { location.hash = id; setMenu(false); mainRef.current?.scrollTo(0, 0); window.scrollTo(0, 0); };
  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const idx = flat.findIndex((t) => t.id === currentId);
  const topic = flat[idx];
  const currentTrack = topic?.track || "python";
  const currentRoadmap = trackRoadmaps[currentTrack];
  const trackTopics = flat.filter((t) => t.track === currentTrack);
  const trackIndex = trackTopics.findIndex((t) => t.id === currentId);
  const trackTotal = trackTopics.length;
  const count = useMemo(() => flat.filter((t) => done[t.id]).length, [done]);
  const pct = Math.round((count / flat.length) * 100);

  return (
    <div className="app">
      <header className="top">
        {currentId !== "home" && <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X size={20} /> : <Menu size={20} />}</button>}
        <button className="brand-home" onClick={() => go("home")} aria-label="Go to learning paths"><span className="logo"><Code2 size={20} /></span>
          <span><b>build.roadmaps</b><small>LEARN · RECALL · PRACTISE</small></span></button>
        <div className="prog">
          <div><span>{count} / {flat.length} topics</span><b>{pct}%</b></div>
          <i><u style={{ width: pct + "%" }} /></i>
        </div>
      </header>
      <div className="body">
        {currentId !== "home" && <Sidebar roadmap={currentRoadmap} track={currentTrack} currentId={currentId} done={done} onSelect={go} query={query} setQuery={setQuery}
          total={trackTotal} searchRef={searchRef} open={menu} />}
        <main ref={mainRef} className={currentId === "home" ? "home-main" : ""}>
          {currentId === "home" ? <HomePage totalTopics={flat.length} completedTopics={count} /> : (
            <TopicPage topic={topic} section={topic.section} sectionIndex={topic.sectionIndex} done={!!done[topic.id]}
              onToggle={toggle} prev={trackTopics[trackIndex - 1]} next={trackTopics[trackIndex + 1]} onGo={go} />
          )}
        </main>
      </div>
    </div>
  );
}
