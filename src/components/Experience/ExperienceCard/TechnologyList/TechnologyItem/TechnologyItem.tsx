import { FC } from 'react';
import './TechnologyItem.css';
import { Technology } from '../../ExperienceCard';

const TechnologyItem: FC<Technology> = (props) => {
  return (
    <>
      <div className="technology-grid-item">
        <div className="technology-logo-wrapper">
          <img src={props.src} alt={props.name} />
        </div>
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default TechnologyItem;
