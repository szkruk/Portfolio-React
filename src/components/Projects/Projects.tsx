import React, { useState } from 'react';
import './Projects.css';
import LanguageList from './LanguageList/LanguageList';
import ProjectWindow from './ProjectWindow/ProjectWindow';
import data from './projects.json';

export interface ProjectDescription {
  id: number;
  name: string;
  media?: {
    videoLink?: string;
    imagePath?: string;
  };
}

export interface LanguageProjectsProps {
  id: number;
  language: string;
  projects: ProjectDescription[];
}

const Projects = () => {
  const [activeLanguage, setActiveLanguage] = useState(data[0]);
  const [activeProject, setActiveProject] = useState(data[0].projects[0]);

  return (
    <section id="projects">
      <h1 className="heading-of-section">PROJECTS</h1>
      <LanguageList
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <ProjectWindow activeProject={activeProject} />
    </section>
  );
};

export default Projects;
