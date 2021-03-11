/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <footer className="footer mt-auto py-3-bg dark">
            <div className="container">
              <span className="text-muted">
                <a href="https://github.com/esober101" target="_blank" className="fa fa-github" />
                <a href="https://www.linkedin.com/in/eric-ober-598b6b17/" target="_blank" className="fa fa-linkedin" />
                <a href="mailto:ericscottober@gmail.com" target="blank" className="fa fa-envelope" />
                <a href="resume/myresume.pdf" download="newfilename" target="_blank" className="fa fa-file-pdf-o" />
              </span>
            </div>
          </footer>
        );
    }
}

export default Footer;