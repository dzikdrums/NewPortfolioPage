import React from 'react';
import { ReactComponent as ScrollDown } from '../../assets/arrow-left.svg';
import uniqid from 'uniqid';

const Skill = ({ tag, name, description, handleSkillToggle }) => {
  return (
    <div
      onClick={() => handleSkillToggle(tag)}
      className={`skill-container ${tag}`}
      key={tag}
    >
      <div className={`skill-overlay overlay-${tag}`} />
      <div className="skill-name">
        <h2>{name}</h2>
        <ScrollDown className={`arrow-${tag}`} />
      </div>
      <div className="skill-description">
        {description.map((paragraph) => (
          <p key={uniqid()}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Skill;
