import React from 'react';
import "../style.css";
import video from "../video/video.mp4";

class Figure extends React.Component {
    render() {
        return (
            <figure>
            <div className="video-container">
              <div className="color-overlay" />
              <video autoPlay loop muted playsInline poster="./images/background.jpg">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </figure>
        );
    }
}

export default Figure;