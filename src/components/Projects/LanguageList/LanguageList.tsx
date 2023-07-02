import React, { FC, useEffect } from 'react';
import './LanguageList.css';
import { LanguageProjectsProps, ProjectDescription } from '../Projects';
import data from '../projects.json';
import ProjectList from '../ProjectList/ProjectList';

interface Props {
  activeLanguage: LanguageProjectsProps;
  setActiveLanguage: (value: LanguageProjectsProps) => void;
  activeProject: ProjectDescription;
  setActiveProject: React.Dispatch<React.SetStateAction<ProjectDescription>>;
}
const LanguageList: FC<Props> = ({
  activeLanguage,
  setActiveLanguage,
  activeProject,
  setActiveProject
}) => {
  useEffect(() => {
    setActiveProject(activeLanguage.projects[0]);
  }, [activeLanguage]);

  return (
    <>
      <div>
        <ul className="projects-language-list">
          {data.map((obj) => {
            return (
              <li className="selected-language" key={obj.id}>
                <a
                  className={obj.id === activeLanguage.id ? 'active-language' : ''}
                  onClick={() => {
                    setActiveLanguage(obj);
                  }}>
                  {obj.language}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <ProjectList
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        projects={activeLanguage.projects}
      />
    </>
  );
};

export default LanguageList;
