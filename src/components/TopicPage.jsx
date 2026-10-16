import { Code2, Play, BookOpen, ListChecks, AlertCircle, ExternalLink, Circle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card.jsx";
import CopyButton from "./CopyButton.jsx";

const toSeconds = (t) => t.split(":").reduce((n, x) => n * 60 + Number(x), 0);
const videoUrl = (id, at) => `https://youtu.be/${id}` + (at ? `?t=${toSeconds(at)}` : "");
const gfgUrl = (t) => t.gfg || "https://www.google.com/search?q=" + encodeURIComponent("site:geeksforgeeks.org python " + t.title);
const plainText = (text) => text.replace(/`/g, "");

export default function TopicPage({ topic, section, sectionIndex, done, onToggle, prev, next, onGo }) {
  const referenceUrl = section.referenceUrl || gfgUrl(topic);
  const referenceLabel = section.referenceLabel || "GeeksforGeeks reference";
  const isGit = section.track === "git-github";
  return (
    <article className="topic">
      <nav className="crumbs">
        <span>Roadmap</span><ChevronRight size={13} /><span>{section.title}</span><ChevronRight size={13} /><b>{topic.title}</b>
      </nav>
      <div className="eyebrow">{String(sectionIndex + 1).padStart(2, "0")} / {section.title.toUpperCase()}</div>
      <div className="title-row">
        <h1>{topic.title}</h1>
        <button className={"mark" + (done ? " on" : "")} onClick={() => onToggle(topic.id)}>
          {done ? <CheckCircle2 size={16} /> : <Circle size={16} />} {done ? "Completed" : "Mark complete"}
        </button>
      </div>
      <p className="lead">{plainText(topic.summary)}</p>
      <div className="meta">
        <span className="badge">{topic.level}</span>
        {topic.extra && <span className="badge extra">Extra</span>}
        {section.video && (
          <a href={videoUrl(section.video, topic.at)} target="_blank" rel="noopener noreferrer">
            <Play size={13} /> Open source video{topic.at ? ` (${topic.at})` : ""} <ExternalLink size={12} />
          </a>
        )}
        <a href={referenceUrl} target="_blank" rel="noopener noreferrer">
          <BookOpen size={13} /> {referenceLabel} <ExternalLink size={12} />
        </a>
      </div>
      <hr />
      <div className="grid2">
        <Card icon={Code2} tone="purple" title="Syntax" sub="The general pattern">
          <pre className="code">{topic.syntax}</pre>
        </Card>
        <Card icon={Play} tone="blue" title="Example" sub={isGit ? "Command-line example" : "Runnable Python code"} action={<CopyButton text={topic.example} />}>
          <pre className="code">{topic.example}</pre>
          {topic.output && (<><div className="label">EXPECTED OUTPUT</div><pre className="code out">{topic.output}</pre></>)}
        </Card>
      </div>
      <Card icon={BookOpen} tone="green" title="When to use it" sub="Connect the concept to a real task">
        <p className="txt">{plainText(topic.when)}</p>
      </Card>
      <Card icon={ListChecks} tone="orange" title="Common mistakes" sub="Things worth remembering">
        <ul className="mist">
          {topic.mistakes.map((m) => (<li key={m}><span className="bang"><AlertCircle size={13} /></span>{plainText(m)}</li>))}
        </ul>
      </Card>
      <div className="pager">
        {prev ? <button onClick={() => onGo(prev.id)}><ChevronLeft size={16} /><span><small>Previous</small>{prev.title}</span></button> : <span />}
        {next ? <button className="r" onClick={() => onGo(next.id)}><span><small>Next</small>{next.title}</span><ChevronRight size={16} /></button> : <span />}
      </div>
    </article>
  );
}
