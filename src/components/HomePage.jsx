import { ArrowDownRight, ArrowRight, Blocks, BookOpen, Boxes, Braces, Container, ExternalLink, GitBranch, Monitor, Server, Terminal } from "lucide-react";

const tracks = [
  {
    id: "python",
    name: "Python",
    description: "Build a strong foundation in the language, one clear concept at a time.",
    icon: Braces,
    tone: "mint",
    status: "Available now",
    href: "#introduction-to-python",
    active: true,
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    description: "Version control, collaboration, branches, and shipping your work.",
    icon: GitBranch,
    tone: "coral",
    status: "Available now",
    href: "#git-version",
    active: true,
  },
  {
    id: "docker",
    name: "Docker",
    description: "Package applications and understand the tools behind containers.",
    icon: Container,
    tone: "sky",
    status: "Available now",
    href: "#docker-what-is",
    active: true,
  },
  {
    id: "linux",
    name: "Linux",
    description: "Get comfortable with the command line, files, and everyday workflows.",
    icon: Terminal,
    tone: "gold",
    status: "Available now",
    href: "#linux-terminal",
    active: true,
  },
  {
    id: "react",
    name: "React",
    description: "Create interactive interfaces with components and modern React patterns.",
    icon: Monitor,
    tone: "sky",
    status: "Coming later",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    description: "Build Python backends and services with a modern web framework.",
    icon: Server,
    tone: "mint",
    status: "Coming later",
  },
  {
    id: "apis",
    name: "APIs",
    description: "Learn how applications communicate, from HTTP basics to useful patterns.",
    icon: Boxes,
    tone: "coral",
    status: "Coming later",
  },
];

const groups = [
  { label: "Programming", icon: Braces, tracks: ["python"] },
  { label: "Developer tools", icon: Blocks, tracks: ["git-github", "docker", "linux"] },
  { label: "Frontend", icon: Monitor, tracks: ["react"] },
  { label: "Backend", icon: Server, tracks: ["fastapi", "apis"] },
];

export default function HomePage({ totalTopics, completedTopics }) {
  const progress = totalTopics ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-intro-copy">
          <div className="eyebrow">A PRACTICAL LEARNING LIBRARY</div>
          <h1>Learn the tools.<br /><span>Build what’s next.</span></h1>
          <p>Clear, connected roadmaps for the skills that turn ideas into working software.</p>
          <a className="home-cta" href="#introduction-to-python">Start with Python <ArrowRight size={16} /></a>
        </div>
        <div className="home-index" aria-label="Learning library overview">
                      <div className="index-top"><span>FIELD GUIDE</span><span>001-007</span></div>
          <div className="index-mark"><Braces size={48} strokeWidth={1.3} /><ArrowDownRight size={24} /></div>
          <div className="index-bottom"><strong>Skills, in sequence.</strong><span>One path at a time.</span></div>
        </div>
      </section>

      <section className="home-progress" aria-label="Learning progress">
        <div className="progress-copy">
          <BookOpen size={17} />
          <span><strong>Your learning progress</strong><small>{completedTopics} of {totalTopics} topics complete</small></span>
        </div>
        <div className="home-progress-track" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
        <strong className="progress-percent">{progress}%</strong>
      </section>

      <section className="pathways">
        <div className="section-heading">
          <div><div className="eyebrow">EXPLORE THE LIBRARY</div><h2>Choose a learning path</h2></div>
          <span>{tracks.length} paths <i>·</i> growing over time</span>
        </div>
        {groups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <section className="path-group" key={group.label}>
              <h3><GroupIcon size={16} />{group.label}</h3>
              <div className="path-grid">
                {group.tracks.map((id) => {
                  const track = tracks.find((item) => item.id === id);
                  const Icon = track.icon;
                  const content = (
                    <>
                      <div className="path-card-top"><span className={`path-icon ${track.tone}`}><Icon size={18} /></span><span className={`path-status${track.active ? " available" : ""}`}><i />{track.status}</span></div>
                      <h4>{track.name}</h4>
                      <p>{track.description}</p>
                      <div className="path-card-foot">{track.active ? <>Explore roadmap <ArrowRight size={15} /></> : <>Path in the works <ExternalLink size={13} /></>}</div>
                    </>
                  );
                  return track.active ? (
                    <a className="path-card active" href={track.href} key={track.id}>{content}</a>
                  ) : (
                    <article className="path-card upcoming" key={track.id}>{content}</article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>
      <footer className="home-footer"><span>Keep learning in small, useful steps.</span><span>LEARN · RECALL · PRACTISE</span></footer>
    </div>
  );
}
