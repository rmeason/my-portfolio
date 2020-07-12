import React from 'react';
import "./Contact.css"

const Contact = () => (
<section class="contact-us-section">
  <div class="row medium-unstack">
    <div class="columns contact-us-section-right">
      <h1 class="contact-us-header">Message Me Here: </h1>
      <form class="contact-us-form">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id="" rows="12" placeholder="Type your message here"></textarea>
        <div class="contact-us-form-actions">
          <input type="submit" class="button" value="Send it" />
          <div>
            <label for="FileUpload" class="button contact-us-file-button">Attach Files</label>
            <input type="file" id="FileUpload" class="show-for-sr" />
          </div>
        </div>
      </form>
    </div>
  </div>
</section>


  );

export default Contact;