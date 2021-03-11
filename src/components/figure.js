import React from 'react';

class Figure extends React.Component {
    render() {
        return (
            <figure>
            <div className="video-container">
              <div className="color-overlay" />
              <video autoPlay loop muted playsInline poster="../images/background.jpg">
                <source src="../video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </figure>
        );
    }
}

export default Figure;