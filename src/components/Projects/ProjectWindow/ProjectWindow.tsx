import React, { FC } from 'react';
import './ProjectWindow.css';
import { ProjectDescription } from '../Projects';
import MediaContainer from './MediaContainer/MediaContainer';
import GitHubLinkContainer from './GitHubLinkContainer/GitHubLinkContainer';

interface Props {
  activeProject: ProjectDescription;
}

const ProjectWindow: FC<Props> = ({ activeProject }) => {
  return (
    <div className="project-window">
      <MediaContainer {...activeProject?.media} />
      <GitHubLinkContainer />
    </div>
  );
};

export default ProjectWindow;
