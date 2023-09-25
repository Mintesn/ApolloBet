import React from "react";
import "../Pages/home.css"
import bgimg from "../video/bgimg.mp4"
import card1 from "../../images/Golden-Rce.jpg"
import card2 from "../../images/kiron.jpg"
import card3 from "../../images/tech-support.webp"
import card4 from "../../images/consolting.webp"
import card5 from "../../images/ll.jpg"
import imo from "../../images/virtual-sports-img.webp"
import photo from "../../images/photo.jpg"


export const Home = () => {
  return (
    <div>
    <div className="section">
      <video autoPlay loop muted id="myVideo">
          <source  src={bgimg} type="video/mp4" />
      </video>
    
          <div className="slider">
               {/* <h1>Apollo Bet Member One Plc</h1> */}
                  {/* <div className="text">
                     
                <h1>A</h1>
                <h1>P</h1>
                <h1>0</h1>
                <h1>L</h1>
                <h1>L</h1>
                <h1>O</h1>


                  </div> */}
                      {/* <div className="text2">
                        <h2>B</h2>
                        <h2>E</h2>
                        <h2>T</h2>
                        
                      </div> */}
                   </div>
      
                   </div>
                   <div className="topic">
                      <h1>OUR SERVICES ARE</h1>
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
                  <article className="card">
                    <figure>
                      <img src={card4} alt="itsuport" />
                        <figcaption>
                           <h3>Free consolting</h3>
                        </figcaption>
                    </figure>
                  </article>  <article className="card">
                    <figure>
                      <img src={card5} alt="itsuport" />
                        <figcaption>
                           <h3>& Futures Game</h3>
                        </figcaption>
                    </figure>
                  </article>
                   </div>
                   <div className="aplo">
                   <img className="apl" src={photo} alt="aplo" />
                   </div>
                   
                   <div className="topics">
                   <img src={imo} alt="imo" />
                   <div className="tx">
                        <h1><i>APOLLO BET</i></h1>
                        {/* <p>የ አፖሎ ቤት ኤጀንት በመሆን የራሶን ሱቅ ይክፈቱ. 
                          ከ እኛ ጋር በመስራት ብዙ ይጠቀሙ ብዙ ያትርፉ. 
                          የማይቋረጥ 24/7 ድጋፍ እና እገዛ እንዲሁም የ ማማከር አገልግሎት 
                          እናቀርባለን እኛን ልዩ የሚያደርገን በ ጥሩ የ ትርፍ ክፍፍል ስለምንሰራ ነው.</p> */}
                          <p>Open your own shop as an agent of Apollo House.
                             Use more and earn more by working with us.
                              We provide continuous support and assistance 
                              as well as consulting services, 
                            which makes us unique because we work with a 
                            good profit distribution.</p>
                            

                   </div>
                   </div>
    </div>
  );
};

// 