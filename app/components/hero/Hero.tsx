'use client'

import { HeroStyle } from "./Hero.styled"

type Props = {}

const Hero = (props: Props) => {
    return (
      <HeroStyle>
            <div className="heroContainer" >
                <div className="heroStyle" >
                    <div className="textContainer" >
                        <h1 className="heroText" >getlinked Tech</h1>
                            <img  className="bulb" src="./bulb.svg" />
                    </div>
                        <div className="subHero" >
                            <h1>Hackathon
                                <span style={{color: '#D434FE' }} >1.0 </span>
                            </h1>
                            <img src="./chain.svg" className="chain" />
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
                    <div className="revolution" >
                <h3>Igniting a Revolution in HR Innovation </h3>
                        <img src="./vectorLine.svg" className="vectorLine" />
                    </div>
                    <div className="mainHeroImg" >
                <img src="./man-wearing-smart.png"  className="heroImage" />
                        <img src="./img.png" className="orb" />
                        </div>
                </div>
            </div>
            </HeroStyle>
  )
}

export default Hero