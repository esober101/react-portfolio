/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "../style.css";
import myresume from '../resume/myresume.pdf';


class Footer extends React.Component {
    render() {
        return (
          <footer className="footer mt-auto py-5-bg dark">
            <div className="container">
              <span className="text-muted">
                <SocialIcon url="https://github.com/esober101" target="_blank" style={{ height: 35, width: 35, margin: 5 }}/>
                <SocialIcon url="https://www.linkedin.com/in/eric-ober-598b6b17/" target="_blank" style={{ height: 35, width: 35, margin: 5 }}/>
                <SocialIcon url="mailto:ericscottober@gmail.com" target="blank" style={{ height: 35, width: 35, margin: 5 }}/>
                <SocialIcon url={myresume} download="newfilename" target="_blank" style={{ height: 35, width: 35, margin: 5 }}/>
              </span>
            </div>
          </footer>
        );
    }
}

export default Footer;