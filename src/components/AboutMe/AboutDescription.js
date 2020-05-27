import 'animate.css/animate.min.css';

import Profile from '../../assets/main.jpg';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const paragraphStyle = {
  animationFillMode: 'none',
};

const AboutDescription = () => {
  return (
    <section className="wrapper">
      <div className="main-image-container">
        <>
          <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
            <div className="img-container">
              <img alt="project" src={Profile} />
            </div>
          </ScrollAnimation>
        </>
        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
          <h2>Me searching for a Job</h2>
        </ScrollAnimation>
      </div>
      <div className="description">
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h3 className="fadeIn">My story</h3>
        </ScrollAnimation>
        <ScrollAnimation
          className="description-intro"
          animateIn="fadeIn"
          duration={1}
          animateOnce={true}
        >
          At the end of 2018, my friends have finally succedeed in convincing me
          that programming is just like finishing puzzles, and that I should
          totally give it a try!
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h3 className="fadeIn">Beginnings</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={1}
          animateOnce={true}
          style={paragraphStyle}
          className="paragraphs"
        >
          The beginning of my coding adventure was a 3-month intensive Python
          course in programming school - Codecool, which I have finished in
          march 2019. After that I took part in one month Java course continuing
          my endeavour in Codecool, but I felt like this is not completely my
          jam.
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h3>Front-end journey</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={1}
          animateOnce={true}
          style={paragraphStyle}
          className="paragraphs"
        >
          In July 2019 I have started my Front-end journey and since then I'am
          never looking back! ;) I've finished 9-month intensive Web Developer
          Course in Kodilla, under wings of a personal mentor. I've also
          completed a few React/Redux/WebDev courses on Eduweb, Udemy and spend
          wonderful afternoons on Stack Overflow :).
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h3 className="fadeIn">My strengths</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={1}
          animateOnce={true}
          style={paragraphStyle}
          className="paragraphs"
        >
          At the moment I feel pretty confident with my knowledge in HTML/CSS/JS
          as well as React, Redux and MongoDB. I can build and work with REST
          APIs, design fully responsive websites, using semantic HTML and best
          practices for optimisation and accessibility.
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h3 className="fadeIn">My plans</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={1}
          animateOnce={true}
          style={paragraphStyle}
          className="paragraphs"
        >
          I'am currently working on my animation skills, as well in pure CSS, as
          in GSAP library. Next on my list is exploring SQL databases, and
          possibly second JavaScript framework!
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutDescription;
