import React from "react";
import "../Pages/home.css"
import bgimg from "../video/bgimg.mp4"
import card1 from "../../images/Golden-Rce.jpg"
import card2 from "../../images/kiron.jpg"
import card3 from "../../images/tech-support.webp"


export const Home = () => {
  return (
    <div>
    <div className="section">
      <video autoPlay loop muted id="myVideo">
          <source  src={bgimg} type="video/mp4" />
      </video>
    
          <div className="slider">
               {/* <h1>Apollo Bet Member One Plc</h1> */}
                  <div className="text">
                     
                <h1>A</h1>
                <h1>P</h1>
                <h1>0</h1>
                <h1>L</h1>
                <h1>L</h1>
                <h1>O</h1>


                  </div>
                      <div className="text2">
                        <h2>B</h2>
                        <h2>E</h2>
                        <h2>T</h2>
                        
                        <img />
                      </div>
                   </div>
      
                   </div>
                   <div className="topic">
                      <h1>We Provide</h1>
                   </div>

                   <div className="mcard">
                  <article className="card">
                    <figure>
                      <img src={card1} alt="golderace" />
                        <figcaption>
                           <h3>Golden-Race</h3>
                        </figcaption>
                    </figure>
                  </article>
                  <article className="card">
                    <figure>
                      <img src={card2} alt="kiron" />
                        <figcaption>
                           <h3>Keno game</h3>
                        </figcaption>
                    </figure>
                  </article>
                  <article className="card">
                    <figure>
                      <img src={card3} alt="itsuport" />
                        <figcaption>
                           <h3>Full It Service</h3>
                        </figcaption>
                    </figure>
                  </article>
                   </div>
    </div>
  );
};

// 