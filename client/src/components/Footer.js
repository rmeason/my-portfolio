import React from 'react';
import "./Footer.css";


function Footer (props) {
    return (

<footer class="marketing-site-footer">
  <div class="marketing-site-footer-bottom">
    <div id="fRow" class="row large-unstack">
      <div id="fCopy" class="column">
        <p>&copy; 2020 All rights reserved</p>
      </div>
      {/* <div id="fLinks" class="column">
        <ul class="menu marketing-site-footer-bottom-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div> */}
    </div>
    </div>
</footer>

    );
}
export default Footer;