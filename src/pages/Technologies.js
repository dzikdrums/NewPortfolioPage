import '../components/Tech/tech.scss';
import '../components/Intro/intro.scss';

import Intro from '../components/Intro/Intro';
import React from 'react';
import TechDescription from '../components/Tech/TechDescription';

const content = {
  title: 'Technologies I use',
  description:
    'I try to learn a new thing or two everyday. Below is the list of skills I already feel comfortable with',
};

const Technologies = () => {
  return (
    <div className="page">
      <Intro title={content.title} description={content.description} />
      <TechDescription />
    </div>
  );
};

export default Technologies;
