import React from 'react';
import "./Portfolio.css";
import ccs from "./img/ccs.png";
import ts from "./img/ts.png";
import note from "./img/note.png";
import crave from "./img/crave.png"

const Portfolio = () => (

<div class="featured-image-block-grid">
  <div class="featured-image-block-grid-header small-10 medium-8 large-7 columns">
    <h2>A list of my projects:</h2>
    <li>
      Click on the image to check out the sites.
    </li>
    <li>
      Click on the GitHub links to view the repositories.
    </li>
  </div>

  <div class="animate__animated animate__backInDown animate__slow	2.5s row large-up-4 small-up-2">
    <div class="featured-image-block column">
     <a href="https://acschmalenberger.github.io/Project1/" target="_blank">
        <img src={ccs} />
        <br />
        <p class="text-center featured-image-block-title">Comic Character Source</p>
     </a>
        <p class="description">Comic Character Source is an app that allows users to search for a comic book character and receive movies/tv shows that character has been in.</p>
    
        <a href="https://github.com/acschmalenberger/Project1" target="_blank">
          <span class="fa-stack fa-lg github">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
    
    </div>
    
    <div class="featured-image-block column">
     <a href="https://therapist-specialty.herokuapp.com/" target="_blank">
        <img src={ts} />
        <br />
        <p class="text-center featured-image-block-title">Therarapist Specialty</p>
     </a>          
        <p class="description">Therapist Specialty is a therapist/client compatibility app based off of likert scale quizzes.</p>
    
        <a href="https://github.com/rmeason/therapist-specialty" target="_blank">
          <span class="fa-stack fa-lg github">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
    
    </div>
    
    <div class="featured-image-block column">
     <a href="https://projectnumtwo.herokuapp.com/" target="_blank">
        <img src={crave} />
        <br />
        <p class="text-center featured-image-block-title">Cravings!</p>
     </a>
          <p class="description">Cravings! is an app that lets users input the name of what they’d like to eat, and then are presented with restaurants in their area who have that item on their menu.</p>
    
        <a href="https://github.com/dchargois23/Project-2" target="_blank">
          <span class="fa-stack fa-lg github">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
    
    </div>
    
    <div class="featured-image-block column">
     <a href="https://vast-journey-67771.herokuapp.com/" target="_blank">
        <img src={note} />
        <br />
        <p class="text-center featured-image-block-title">Note App</p>
     </a>
          <p class="description">Note App will allow for input of a note title and the note's contents. After the desired information is imputed, we can push the save button. This will log the info for later.</p>
    
        <a href="https://github.com/rmeason/Note-Taker" target="_blank">
          <span class="fa-stack fa-lg github">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
    
    </div>
    
    {/* <div class="featured-image-block column">
     <a href="#" target="_blank">
        <img src="https://unsplash.it/600/440?image=667" />
        <p class="text-center featured-image-block-title"> </p>
      </a>
    </div>
  
    <div class="featured-image-block column">
     <a href="#" target="_blank">
        <img src="https://unsplash.it/600/440?image=249" />
        <p class="text-center featured-image-block-title"> </p>
      </a>
    </div>
    
    <div class="featured-image-block column">
     <a href="#" target="_blank">
        <img src="https://unsplash.it/600/440?image=382" />
        <p class="text-center featured-image-block-title"> </p>
      </a>
    </div>

    <div class="featured-image-block column">
     <a href="#" target="_blank">
        <img src="https://unsplash.it/600/440?image=1075" />
        <p class="text-center featured-image-block-title"> </p>
      </a>
    </div> */}
  </div>
</div>

  );

export default Portfolio;