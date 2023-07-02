import React, { FC } from 'react';
import './ProjectList.css';
import { ProjectDescription } from '../Projects';

interface Props {
  activeProject: ProjectDescription;
  setActiveProject: React.Dispatch<React.SetStateAction<ProjectDescription>>;
  projects: ProjectDescription[];
}

const ProjectList: FC<Props> = ({ activeProject, setActiveProject, projects }) => {
  return (
    <div>
      <ul className="project-list">
        {projects.map((project) => {
          return (
            <li className="selected-language" key={project.id}>
              <a
                className={project.id === activeProject.id ? 'active-language' : ''}
                onClick={() => {
                  setActiveProject(project);
                }}>
                {project.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
