import './Technologies.scss';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: 'Front-end',
    results: [
      'HTML',
      'CSS',
      'SASS',
      'javascript',
      'react',
      'redux',
      'framer-motion',
      'gsap',
      'styled-components',
      'bootstrap',
    ],
  },
  {
    id: 1,
    title: 'Back-end',
    results: ['node', 'express', 'MongoDB', 'Python'],
  },
  {
    id: 2,
    title: 'Tools',
    results: ['Git', 'Jira', 'Slack', 'Adobe Premiere, XD', 'npm'],
  },
];

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const isMobile = window.innerWidth < 768;

  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? '-170px' : '-300px',
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    rootMargin: isMobile ? '-170px' : '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('aboutVisible');
    }
    if (servicesInView) {
      animation.start('servicesVisible');
    }
  }, [animation, inView, servicesInView]);

  return (
    <motion.div className="home-about-section">
      <div className="container">
        <div className="row" id="about-row">
          <motion.div
            ref={aboutRef}
            animate={animation}
            initial="hidden"
            variants={{
              aboutVisible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            className="about"
          >
            <h2>
              I used to be a professional drummer for last 12 years. One and a
              half years ago I've decided to switch my focus to front-end
              development. Never looked back since.
            </h2>
            <p>
              At the moment I feel pretty confident with my knowledge in
              HTML/CSS/JS as well as React, Redux and MongoDB. I can build and
              work with REST APIs, design fully responsive websites, using
              semantic HTML and best practices for optimisation and
              accessibility.
            </p>
          </motion.div>
          <motion.div
            ref={servicesRef}
            animate={animation}
            initial="hidden"
            variants={{
              servicesVisible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            className="services"
          >
            <h3>Technologies I use</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                expanded={expanded}
                setExpanded={setExpanded}
                key={index}
                details={details}
                onCursor={onCursor}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Accordion = ({ details, setExpanded, expanded, onCursor }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        className="accordion-header"
        onMouseEnter={() => onCursor('pointer')}
        onMouseLeave={onCursor}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: '#000000',
        }}
      >
        <div className="accordion-icon">
          <motion.span
            animate={{
              rotate: isOpen || hovered ? 0 : 45,
              x: 3,
            }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </div>
        {details.title}
      </motion.div>
      <motion.div
        className="accordion-content"
        key="content"
        animate={{ height: isOpen ? 'auto' : '0' }}
      >
        {details.results.map((result) => (
          <span key={result}>{result}</span>
        ))}
      </motion.div>
    </>
  );
};

export default HomeAbout;
