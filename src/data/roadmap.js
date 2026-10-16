// Roadmap registry: each learning track keeps its content in a separate module.
import { pythonRoadmap } from "./pythonRoadmap.js";
import { gitRoadmap } from "./gitRoadmap.js";
import { dockerRoadmap } from "./dockerRoadmap.js";
import { linuxRoadmap } from "./linuxRoadmap.js";

export const roadmap = [...pythonRoadmap, ...gitRoadmap, ...dockerRoadmap, ...linuxRoadmap];
