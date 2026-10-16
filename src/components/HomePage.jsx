import { ArrowDownRight, ArrowRight, Blocks, BookOpen, Braces, Clock, Monitor, Server } from "lucide-react";
import { TRACKS, trackById } from "../tracks.js";

const groups = [
  { label: "Programming", icon: Braces, tracks: ["python"] },
  { label: "Developer tools", icon: Blocks, tracks: ["git-github", "docker", "linux"] },
  { label: "Frontend", icon: Monitor, tracks: ["react"] },
  { label: "Backend", icon: Server, tracks: ["fastapi", "apis"] },
];

export default function HomePage({ stats, overall }) {
  const progress = overall.total ? Math.round((overall.done / overall.total) * 100) : 0;
  const count = String(TRACKS.length).padStart(3, "0");

  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-intro-copy">
          <div className="eyebrow">A PRACTICAL LEARNING LIBRARY</div>
          <h1>Learn the tools.<br /><span>Build what’s next.</span></h1>
          <p>Clear, connected roadmaps for the skills that turn ideas into working software.</p>
          <a className="home-cta" href={`#${trackById("python").start}`}>Start with Python <ArrowRight size={16} /></a>
        </div>
        <div className="home-index" aria-hidden="true">
          <div className="index-top"><span>FIELD GUIDE</span><span>001-{count}</span></div>
          <div className="index-mark"><Braces size={48} strokeWidth={1.3} /><ArrowDownRight size={24} /></div>
          <div className="index-bottom"><strong>Skills, in sequence.</strong><span>One path at a time.</span></div>
        </div>
      </section>

      <section className="home-progress" aria-label="Learning progress">
        <div className="progress-copy">
          <BookOpen size={17} />
          <span><strong>Your learning progress</strong><small>{overall.done} of {overall.total} topics complete</small></span>
        </div>
        <div className="home-progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><i style={{ width: `${progress}%` }} /></div>
        <strong className="progress-percent">{progress}%</strong>
      </section>

      <section className="pathways">
        <div className="section-heading">
          <div><div className="eyebrow">EXPLORE THE LIBRARY</div><h2>Choose a learning path</h2></div>
          <span>{TRACKS.filter((t) => t.active).length} available <i>·</i> {TRACKS.filter((t) => !t.active).length} on the way</span>
        </div>
        {groups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <section className="path-group" key={group.label}>
              <h3><GroupIcon size={16} />{group.label}</h3>
              <div className="path-grid">
                {group.tracks.map((id) => {
                  const track = trackById(id);
                  const Icon = track.icon;
                  const s = stats[id];
                  const pct = s && s.total ? Math.round((s.done / s.total) * 100) : 0;
                  const content = (
                    <>
                      <div className="path-card-top">
                        <span className={`path-icon ${track.tone}`}><Icon size={18} /></span>
                        <span className={`path-status${track.active ? " available" : ""}`}><i />{track.active ? "Available now" : "Coming later"}</span>
                      </div>
                      <h4>{track.name}</h4>
                      <p>{track.description}</p>
                      {track.active ? (
                        <>
                          <div className="path-meter" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
                          <div className="path-card-foot">{s.done > 0 ? "Continue roadmap" : "Explore roadmap"} <ArrowRight size={15} /><span>{s.done} / {s.total}</span></div>
                        </>
                      ) : (
                        <div className="path-card-foot muted"><Clock size={13} /> Path in the works</div>
                      )}
                    </>
                  );
                  return track.active ? (
                    <a className={`path-card active ${track.tone}`} href={`#${track.start}`} key={track.id}>{content}</a>
                  ) : (
                    <article className="path-card upcoming" key={track.id}>{content}</article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>
      <footer className="home-footer"><span>Keep learning in small, useful steps.</span><span className="home-author">Created by <strong>Ruban Edward</strong></span><span>LEARN · RECALL · PRACTISE</span></footer>
    </div>
  );
}
