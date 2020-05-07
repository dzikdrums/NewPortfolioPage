import '../components/AboutMe/about.scss';
import '../components/Intro/intro.scss';

import AboutDescription from '../components/AboutMe/AboutDescription';
import Intro from '../components/Intro/Intro';
import React from 'react';

const content = {
  title: 'About me',
  description:
    "I'am a front-end developer from Kraków, currently searching for a job",
};

const About = () => {
  return (
    <div>
      <div className="page">
        <Intro title={content.title} description={content.description} />
        <AboutDescription />
      </div>
    </div>
  );
};

export default About;
