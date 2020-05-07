import 'animate.css/animate.min.css';

import React, { useState } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import Skill from './Skill';
import gsap from 'gsap';
import { skills } from '../../data';

const tl = gsap.timeline();

const TechDescription = () => {
  const [skillsReveal, setSkillsReveal] = useState({
    html: false,
    css: false,
    javascript: false,
    react: false,
    node: false,
    mongo: false,
    python: false,
  });

  const handleSkillToggle = (element) => {
    if (skillsReveal[element] === false) {
      for (let key in skillsReveal) {
        let value = skillsReveal[key];
        if (value === true) {
          tl.to(`.${key}`, 0.4, {
            height: '85px',
            ease: 'expo.inOut',
          })
            .to(`.overlay-${key}`, 0.6, {
              y: '-100%',
              delay: -0.4,
              ease: 'expo.inOut',
            })
            .to(`.arrow-${key}`, 0.6, {
              rotation: 90,
              background: 'white',
              color: '#cacaca',
              borderColor: 'rgb(202, 202, 202)',
              ease: 'expo.inOut',
              delay: -0.6,
            });
          setSkillsReveal((prevState) => ({
            ...prevState,
            [key]: false,
          }));
        }
      }
      tl.to(`.overlay-${element}`, 0.6, {
        y: 0,
        ease: 'expo.inOut',
      })
        .to(`.${element}`, 0.4, {
          height: '400px',
          ease: 'expo.inOut',
          delay: -0.4,
        })
        .to(`.arrow-${element}`, 0.6, {
          rotation: -90,
          background: 'white',
          color: 'black',
          borderColor: 'black',
          ease: 'expo.inOut',
          delay: -0.6,
        });
      setSkillsReveal((prevState) => ({
        ...prevState,
        [element]: true,
      }));
    } else {
      tl.to(`.${element}`, 0.6, {
        height: '85px',
        ease: 'expo.inOut',
      })
        .to(`.overlay-${element}`, 0.4, {
          y: '-100%',
          delay: -0.4,
          ease: 'expo.inOut',
        })
        .to(`.arrow-${element}`, 0.6, {
          rotation: 90,
          background: 'white',
          color: '#cacaca',
          borderColor: 'rgb(202, 202, 202)',
          ease: 'expo.inOut',
          delay: -0.6,
        });
      setSkillsReveal((prevState) => ({
        ...prevState,
        [element]: false,
      }));
    }
  };

  return (
    <div className="tech-description-wrapper">
      <div className="category-container">
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h2 className="category-title">Front-end</h2>
        </ScrollAnimation>
        {skills.front.map(({ id, tag, name, description }) => (
          <ScrollAnimation
            key={name}
            animateIn="fadeIn"
            duration={id + 1}
            animateOnce={true}
          >
            <Skill
              id="animate1"
              handleSkillToggle={handleSkillToggle}
              name={name}
              description={description}
              tag={tag}
            />
          </ScrollAnimation>
        ))}
      </div>
      <div className="category-container">
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h2 className="category-title">Back-end</h2>
        </ScrollAnimation>

        {skills.back.map(({ id, tag, name, description }) => (
          <ScrollAnimation
            offset={0}
            animateIn="fadeIn"
            duration={id + 1}
            animateOnce={true}
            key={name}
          >
            <Skill
              handleSkillToggle={handleSkillToggle}
              name={name}
              description={description}
              tag={tag}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default TechDescription;
