import React from "react";
import '../Pages/about.css'
import img1 from '../../images/horse-big.png'
import img2 from '../../images/apl14.jpg'

export const About = () => {
  return (
    <div>
    <div className="sctin">
      <img className="myimg" src={img1} alt="abut" />
      <div className="toll">
                  <div>
                    <h1>Welcome to Apollo Bet!</h1>
                    </div>
            <div>
            <p>Hello and welcome to Apollo Bet, the place to find the best Betting Games 
              for every taste and occasion. We thoroughly check the quality of our Service, working only 
              with reliable suppliers so that you only receive the best quality product.
              We at Apollo believe in high quality and exceptional customer service. 
              But most importantly, we believe shopping is a right, not a luxury, so we
               strive to deliver the best Service at the most affordable prices, and ship 
               them to you regardless of where you are located.
              
              We aim to offer our customers a variety of the latest Virtual Game.
               We’ve come a long way, so we know exactly which direction to take when supplying 
               you with high quality yet budget-friendly products. We offer all of this while
                providing excellent customer service and friendly support.

                We always keep an eye on the latest trends in Virtual Game and put 
                our customers’ 
                wishes first. That is why we have satisfied customers all over the world, and are 
                thrilled to
                be a part of the betting industry.

                The interests of our customers are always top priority for us, so we hope you will enjoy our 
                products as much as we enjoy making them available to you.</p>
                </div>
          </div>
    </div>
         <div className="secnd">
          <div className="hh5">
           <h1>How It Work</h1>
           <p>
           But how does virtual sports betting work? You have to remember that these are 
           virtual events or as some unkind customers describe them ‘cartoons.’ One of the 
           joys of virtual sports betting is the names that are given to the competitors. 
           The virtual sports are actually fixed odds events that use a random number generator
          to determine the winner. No need therefore to be spending time going through the form books.
           Each of the competitors will be given odds on them to win the event. These are generally good
          odds with no heavily odds on favourites.You can bet on the winner of the race or place an 
          each-way wager. A straight forecast bet (correctly choosing the first two home in the right 
          order) or Tricast (the first three finishers) can also be placed. With decent odds available, 
          it is possible to get some good returns. With virtual football, you can bet on the match results, 
          under or over, a double chance or correct score.The event is then held, with some pretty good
           graphics being shown.  You are not able to cash out any bets placed on virtual sports. With 
           the result being determined by the random number generator, you can just place bets on your 
           favourite number or name. There won’t be any recriminations afterwards if you don’t win unlike 
           when backing horses just because you like their name.</p>
          </div>
         <img className="myimg2" src={img2} alt="abut" />
         </div>
    </div>
  );
};
