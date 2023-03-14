import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

              <Link to='https://www.acorn.utoronto.ca/'>ACORN</Link>
              <Link to='https://www.utoronto.ca/'>U OF T MAIN</Link>
              <Link to='https://q.utoronto.ca/'>QUERCUS</Link>
          </div>

        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
             <Link to='https://studentlife.utoronto.ca/task/support-when-you-feel-distressed/'>STUDENT SUPPORT</Link>
              <Link to='https://mscac.utoronto.ca/privacy'>PRIVACY POLICY</Link>
              <Link to='https://mscac.utoronto.ca/feedback'>WEBSITE FEEDBACK</Link>
          </div>
        </div>
      </div>

          <small class='website-rights'>Copyright © 2022<br/>Master of Science in Applied Computing (MScAC) Program<br/>
          Faculty of Arts & Science, University of Toronto<br/>All rights reserved
          </small>




    </div>
  );
}

export default Footer;