import React from 'react';
import "./About.css";

const About = () => (

<div class="about-the-author">
  <h3 class="author-title">A little about myself:</h3>
  <div class="row">
    <div class="small-12 medium-4 columns">
      <div class="author-image">
        <img src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-9/12801472_10207379593700596_2360580408245040920_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_oc=AQm444wzcLobJd_NM7w8jxgITh4BXsrmATwjWjk8bpstoB8Wpn79qUuWjtWlLQCIF_abSNGAE2C5QS5bah_I4Am-&_nc_ht=scontent.fhou1-1.fna&oh=aad76270313074e74743e05958929a81&oe=5F2EB29C" />
      </div>
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
      <h4 class="separator-left">Michael Eason</h4>
      <p>Full-stack web developer with extensive knowledge in research psychology and human behavior. Earned a certificate in full-stack development from Rice University, with new competencies in HTML, JavaScript, CSS, React.js, and CSS Framework implementation. Known to be self-directed with a passion for developing applications with a focus on superior user experience. Experienced in working on projects in teams, as well as developing a MERN application as a solo-developer. My solo app is a site that allows those who are looking for a therapist to take a quiz and find the therapist who is most compatible with their answers. I am looking forward to utilizing my skills and experience to create helpful applications.</p>
    </div>
  </div>
</div>



  );

export default About;