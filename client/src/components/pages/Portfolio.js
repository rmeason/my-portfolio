import React from 'react';
import "./Portfolio.css";
import ccs from "./img/ccs.png"

const Portfolio = () => (

  <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div class="orbit-wrapper">
    <ul class="orbit-container">
      <li class="is-active orbit-slide">
      <div class="work-feature-block row">
          <div class="columns medium-7">
            <img class="work-feature-block-image" src={ccs} />
          </div>
          <div class="columns medium-5">
            <h2 class="work-feature-block-header">Comic Character Source</h2>
            <p>For this collaborative project I was in charge of the framework and stylistic capability of this site.</p>
            <h2>Check it out!</h2>
            <ul>
              <li><a href="https://acschmalenberger.github.io/Project1/" target="_blank">Comic Charicter Source</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="work-feature-block row">
          <div class="columns medium-7">
            <img class="work-feature-block-image" src="#"/>
          </div>
          <div class="columns medium-5">
            <h2 class="work-feature-block-header">   </h2>
            <p>    </p>
            <h2>   </h2>
            <ul>
              {/* <li>   </li>
              <li>   </li>
              <li>   </li>
              <li>   </li> */}
            </ul>
          </div>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="work-feature-block row">
          <div class="columns medium-7">
            <img class="work-feature-block-image" src="#"/>
          </div>
          <div class="columns medium-5">
            <h2 class="work-feature-block-header">    </h2>
            <p>  </p>
            <h2>   </h2>
            <ul>
              {/* <li>   </li>
              <li>   </li>
              <li>   </li>
              <li>   </li> */}
            </ul>
          </div>
        </div>
      </li>
      <li class="orbit-slide">
        <div class="work-feature-block row">
          <div class="columns medium-7">
            <img class="work-feature-block-image" src="#"/>
          </div>
          <div class="columns medium-5">
            <h2 class="work-feature-block-header">    </h2>
            <p>   </p>
            <h2>   </h2>
            <ul>
              {/* <li>   </li>
              <li>   </li>
              <li>   </li>
              <li>   </li> */}
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <nav class="orbit-bullets">
    <button class="is-active" data-slide="0">
      <span class="show-for-sr">First slide details.</span>
      <span class="show-for-sr" data-slide-active-label>Current Slide</span>
    </button>
    <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
  </nav>
</div>

  );

export default Portfolio;