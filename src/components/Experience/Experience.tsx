import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import data from './experience.json';

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="heading-of-section">EXPERIENCE</h1>
      <div className="experience-cards-wrapper">
        <ExperienceCard {...data[0]} />
        <ExperienceCard {...data[1]} />
      </div>
    </section>
  );
};

export default Experience;
