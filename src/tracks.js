import { Braces, GitBranch, Container, Terminal, Monitor, Server, Boxes } from "lucide-react";

// Single source of truth for every learning path. Used by the home page,
// sidebar, topic page and the header, so names/labels can't drift apart.
export const TRACKS = [
  { id: "python", name: "Python", icon: Braces, tone: "mint", active: true, start: "introduction-to-python",
    description: "Build a strong foundation in the language, one clear concept at a time.",
    heading: "Python, step by step.", exampleSub: "Runnable Python code" },
  { id: "git-github", name: "Git & GitHub", icon: GitBranch, tone: "coral", active: true, start: "git-version",
    description: "Version control, collaboration, branches, and shipping your work.",
    heading: "Git & GitHub, step by step.", exampleSub: "Command-line example" },
  { id: "docker", name: "Docker", icon: Container, tone: "sky", active: true, start: "docker-what-is",
    description: "Package applications and understand the tools behind containers.",
    heading: "Docker, step by step.", exampleSub: "Terminal example" },
  { id: "linux", name: "Linux", icon: Terminal, tone: "gold", active: true, start: "linux-terminal",
    description: "Get comfortable with the command line, files, and everyday workflows.",
    heading: "Linux, step by step.", exampleSub: "Shell example" },
  { id: "react", name: "React", icon: Monitor, tone: "sky", active: false,
    description: "Create interactive interfaces with components and modern React patterns." },
  { id: "fastapi", name: "FastAPI", icon: Server, tone: "mint", active: false,
    description: "Build Python backends and services with a modern web framework." },
  { id: "apis", name: "APIs", icon: Boxes, tone: "coral", active: false,
    description: "Learn how applications communicate, from HTTP basics to useful patterns." },
];
export const trackById = (id) => TRACKS.find((t) => t.id === id);
