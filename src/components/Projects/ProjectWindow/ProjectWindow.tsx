import { FC } from 'react';
import './ProjectWindow.css';
import { ProjectDescription } from '../Projects';
import MediaContainer from './MediaContainer/MediaContainer';

interface Props {
  activeProject: ProjectDescription;
}

const ProjectWindow: FC<Props> = ({ activeProject }) => {
  return (
    <div className="project-window">
      <MediaContainer {...activeProject?.media} />
    </div>
  );
};

export default ProjectWindow;
