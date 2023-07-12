import { FC } from 'react';
import './TechnologyList.css';
import { Technology } from '../ExperienceCard';
import TechnologyItem from './TechnologyItem/TechnologyItem';

interface TechnologyListProps {
  technologies: Technology[];
}

const TechnologyList: FC<TechnologyListProps> = (props) => {
  return (
    <>
      <h4 className="technologies-tag">Technologies:</h4>
      <div className="technologies-in-job-wrapper">
        {props.technologies.map((technology, index) => (
          <TechnologyItem {...technology} key={index} />
        ))}
      </div>
    </>
  );
};

export default TechnologyList;
