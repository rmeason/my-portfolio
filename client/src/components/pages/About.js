import React from 'react';
import bioPic from "./img/new-bio-pic.jpg";
import "./About.css";

const About = () => (

<div class="about-the-author">
  <div class="row">
    <div class="small-12 medium-4 columns">
      <div class="author-image">
        <img alt="Richard Michael Eason" src={bioPic} />
      </div>
      <p id="invite">Connect with me here:</p>
      <div class="author-social">
        <a href="https://github.com/rmeason" target="_blank">
          <span class="fa-stack fa-lg github">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/michael-eason-561490115/" target="_blank">
          <span class="fa-stack fa-lg linkedin">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>
        </a>
        <a href="mailto: r.michael.eason@gmail.com" target="_blank">
          <span class="fa-stack fa-lg email">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="small-12 medium-8 columns">
      <h3 class="author-title">A little about myself:</h3>
      <h4 class="separator-left">Michael Eason</h4>
      <p>Full-stack web developer with extensive knowledge in research psychology and human behavior. Earned a certificate in full-stack development from Rice University. Known to be self-directed with a passion for developing applications with a focus on superior user experience. Experienced in working on projects in teams, as well as developing and designing applications as a solo-developer. Looking forward to utilizing my skills and experience to create helpful applications.</p>
    </div>
  </div>
</div>



  );

export default About;
