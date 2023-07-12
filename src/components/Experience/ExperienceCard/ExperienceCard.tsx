import { FC } from 'react';
import './ExperienceCard.css';
import TechnologyList from './TechnologyList/TechnologyList';

export interface Technology {
  src: string;
  name: string;
}

interface CardProps {
  image_path: string;
  company_name: string;
  occupation: string;
  job_description: string;
  technologies: Technology[];
}

const ExperienceCard: FC<CardProps> = (props) => {
  return (
    <div className="experience-card">
      <div className="company-logo-wrapper">
        <img src={props.image_path} alt={props.company_name} className="company-image" />
      </div>
      <h3 className="occupation-name">{props.occupation}</h3>
      <p className="experience-description">{props.job_description}</p>
      <div className="technologies-wrapper">
        <TechnologyList technologies={props.technologies} />
      </div>
    </div>
  );
};

export default ExperienceCard;
