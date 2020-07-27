import React from 'react';
import "./Portfolio.css";
import ccs from "./img/ccs.png";
import ts from "./img/ts.png";

const Portfolio = () => (

<div class="featured-image-block-grid">
  <div class="featured-image-block-grid-header small-10 medium-8 large-7 columns text-center">
    <h2>A list of my projects:</h2>
    <p>click on the image to check out the sites</p>
  </div>
  <div class="row large-up-4 small-up-2">
    <div class="featured-image-block column">
     <a href="https://acschmalenberger.github.io/Project1/" target="_blank">
        <img src={ccs} />
        <p class="text-center featured-image-block-title">Comic Character Source</p>
      </a>
    </div>
    
    <div class="featured-image-block column">
     <a href="https://therapist-specialty.herokuapp.com/" target="_blank">
        <img src={ts} />
        <p class="text-center featured-image-block-title">Therarapist Specialty</p>
      </a>
    </div>
    
    <div class="featured-image-block column">
     <a href="https://projectnumtwo.herokuapp.com/" target="_blank">
        <img src= />
        <p class="text-center featured-image-block-title">Cravings!</p>
      </a>
    </div>
    
    <div class="featured-image-block column">
     <a href="https://vast-journey-67771.herokuapp.com/" target="_blank">
        <img src="https://unsplash.it/600/440?image=792" />
        <p class="text-center featured-image-block-title">Note App</p>
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