import React from "react";
import "./Home.scss";
import Scroll from "../../images/scroll.png";
const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textCon">
          <h2 className="h2-1">Hey,</h2>
          <h2 className="h2-2">I'm Kshitij</h2>
          <h1>
            - A masters student with a passion for coding and a vision for a
            better tomorrow. Looking for positions where I can make a meaningful
            impact.
          </h1>
        </div>
        {/* <div className="summary">
          <p>Hello, Let me walk you through my projects!</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;