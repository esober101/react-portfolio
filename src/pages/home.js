import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <main className="container">
            <div className="card mx-auto" style={{width: '50rem'}}>
              <div className="row" style={{padding: '10px'}}>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1>About Me</h1>
                  </div>
                </div>    
                <div className="col-md-12">
                  <img src="images/mypicture.jpg" alt="my picture" className="img-thumbnail float-left" />
                  <p>
                    Hello! My name is Eric. I graduated with a degree in business from 
                    Cincinnati State Technical and Community College in Cincinnati, Ohio.
                    <br />
                    <br />
                    Currently, I am working as a Director of Operations where I strategically safeguard 
                    and augment the efficiency of the company’s operations to facilitate the accelerating 
                    development and the long-term success of the business. 
                    <br />
                    <br />
                    I have enrolled in the Coding Bootcamp at the Ohio State University to learn new 
                    tools and skills. Please feel free to browse my portfolio.       
                  </p>
                </div>
              </div>
            </div>
          </main>
        );
    }
}

export default Home;
