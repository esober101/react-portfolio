/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "../style.css";
import schedule from "../images/schedule.jpg";
import weather from "../images/weather.jpg";
import menu from "../images/menu.png";
import note from "../images/note.jpg";
import burger from "../images/burger.jpg";
import travel from "../images/travel.jpg";


class Portfolio extends React.Component {
    render() {
        return (
          <main className="container" style={{width: 'fit-content'}}>
            <section className="card mx-auto" style={{width: 'fit-content'}}>
              <div className="row" style={{padding: '10px'}}>
                <div className="col-md-12">
                  <div className="page-header">
                    <h1 style={{textAlign: 'center'}}>Portfolio</h1> 
                  </div>
                </div>
              </div>    
              <div className="row" style={{padding: '10px'}}>
                <div className="col">
                  <a href="https://esober101.github.io/work-day-scheduler/" target="_blank">
                    <img src={schedule} alt="Word Day Scheduler" className="img-thumbnail" />
                  </a>
                  <h5 className="title">Word Day Scheduler</h5>
                </div>
                <div className="col">
                  <a href="https://esober101.github.io/weather-forecast/" target="_blank">
                    <img src={weather} alt="Weather Forecast" className="img-thumbnail float-left" />
                  </a>
                  <h5 className="title">Weather Forecast</h5>
                </div>
                <div className="col">
                  <a href="https://thecoaxial.github.io/Your-Menu-for-Today/" target="_blank">
                    <img src={menu} alt="Your Menu For Today" className="img-thumbnail" />
                  </a>
                  <h5 className="title">Your Menu For Today</h5>
                </div> 
              </div>
              <div className="row" style={{padding: '10px'}}>
                <div className="col">
                  <a href="https://immense-shore-55105.herokuapp.com/" target="_blank">
                    <img src={note} alt="Note Taker" className="img-thumbnail" />
                  </a>
                  <h5 className="title">Note Taker</h5>
                </div>
                <div className="col">
                  <a href="https://secure-stream-37635.herokuapp.com/" target="_blank">
                    <img src={burger} alt="Eat-Da-Burger" className="img-thumbnail float-left" />
                  </a>
                  <h5 className="title">Eat-Da-Burger</h5>
                </div>
                <div className="col">
                  <a href="https://travel-log-project.herokuapp.com/" target="_blank">
                    <img src={travel} alt="Travel Bucketlist" className="img-thumbnail" />
                  </a>
                  <h5 className="title">Travel Bucketlist</h5>
                </div>
              </div>
            </section>
          </main>
        );
    }
}

export default Portfolio;