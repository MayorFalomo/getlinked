'use client'

import { HeroStyle } from "./Hero.styled"

type Props = {}

const Hero = (props: Props) => {
    return (
      <HeroStyle>
            <div className="hero" >
                <div className="revolution" >
                <h3>Igniting a Revolution in HR Innovation </h3>
                        <img src="./vectorLine.svg" className="vectorLine" />
                </div>
                <div  className="heroContainer" >
                <div className="heroStyle" >
                     
                    <div className="textContainer" >
                        <img src="./star.svg" className="star" />
                        <h1 className="heroText" >getlinked Tech</h1>
                            <img  className="bulb" src="./bulb.svg" />
                    </div>
                        <div className="subHero" >
                            <h1>Hackathon
                            <span style={{ color: '#D434FE' }} >1.0 </span>
                            {/* <span><img  className="bulb" src="./bulb.svg" /> </span> */}
                            </h1>
                        <img src="./chain.svg" className="chain" />
                        <img src="./fire.svg" className="fire" />
                    </div>
                    <p>Participate in getlinked tech Hackerthon 2023 and stand a chance to win a Big Prize </p>
                    <button>Register </button>
                    <div className="countDown">
                        <h1>00<span>H </span> </h1>
                        <h1>00<span>M </span> </h1>
                        <h1>00<span>S </span> </h1>
                    </div>
                    <img className='eclipse' src="./purpleLens.svg" alt="img" />
                </div>
                <div className="heroImageContainer" >
                   
                    <div className="mainHeroImg" >
                    <img className='topStar' src="./star2.svg" alt="img" />
                <img src="./man-wearing-smart.png"  className="heroImage" />
                        <img src="./img.png" className="orb" />
                        <img className='eclipse2' src="./purpleLens.svg" alt="img" />
                        <img className='star2' src="./star2.svg" alt="img" />
                        <img className='eclipse2' src="./purpleLens.svg" alt="img" />

                        </div>
                    </div>
                    </div>
            </div>
            </HeroStyle>
  )
}

export default Hero