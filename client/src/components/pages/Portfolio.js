import React from 'react';

const Portfolio = () => (
      <div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <div class="orbit-wrapper">
          <div class="orbit-controls">
            <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
            <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          </div>
          <ul class="orbit-container">
            <li class="is-active orbit-slide">
            <div class="work-feature-block row">
                <div class="columns medium-7">
                  <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
                </div>
                <div class="columns medium-5">
                  <h2 class="work-feature-block-header">Project Description</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
                  <h2>Project Details</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="orbit-slide">
              <div class="work-feature-block row">
                <div class="columns medium-7">
                  <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
                </div>
                <div class="columns medium-5">
                  <h2 class="work-feature-block-header">Project Description</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
                  <h2>Project Details</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="orbit-slide">
              <div class="work-feature-block row">
                <div class="columns medium-7">
                  <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
                </div>
                <div class="columns medium-5">
                  <h2 class="work-feature-block-header">Project Description</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
                  <h2>Project Details</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="orbit-slide">
              <div class="work-feature-block row">
                <div class="columns medium-7">
                  <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
                </div>
                <div class="columns medium-5">
                  <h2 class="work-feature-block-header">Project Description</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
                  <h2>Project Details</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
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