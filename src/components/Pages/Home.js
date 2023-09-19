import React from "react";
import "../Pages/home.css"
import bgimg from "../video/bgimg.mp4"


export const Home = () => {
  return (
    <div className="section">
      <video autoPlay loop muted>
          <source  src={bgimg} type="video/mp4" />
      </video>
     
          <div className="slider">
               <h1>Apollo Bet Member One Plc</h1>
                  <div className="text-wrapper">
                     <div className="box b1"> Fully It Service & Maintainance</div>
                     <div className="box b2"> Kiron</div>
                     <div className="box b3"> GoldenRace</div>
                     <div className="box b4"> Remote Assist</div>
                     <div className="box b5"> Attractive Income Sharing</div>

                  </div>
         </div>
      
    </div>
  );
};

// 