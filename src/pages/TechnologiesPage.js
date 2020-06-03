import '../components/Intro/Intro.scss';

import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro/Intro';
import React from 'react';
import Technologies from '../components/Technologies/Technologies';

const content = {
  title: 'About me',
  description:
    'I am a front-end developer from Kraków, currently searching for a job',
  video: 'drums',
};

const About = ({ onCursor }) => {
  return (
    <div>
      <div className="page">
        <Intro
          title={content.title}
          description={content.description}
          video={content.video}
        />
        <Technologies onCursor={onCursor} />
        <Footer onCursor={onCursor} />
      </div>
    </div>
  );
};

export default About;
