"use client"
import React from 'react'
import { IdeaStyle } from './Idea.styled'

type Props = {}

const Idea = (props: Props) => {
    return (
      <IdeaStyle>
            <section  >
                <div className="imgContainer" >
                    <img className='smallerStar' src='./smallerStar.svg' alt='img' />
                    <img  className='lightBulb' src='./idea.svg' alt='img' />
                    <img className='arrow' src='./arrow.svg' alt='img' />
                </div>
                <div className='ideaContainer' >
                <div  className='flexText' >
                    <div >
              <h1>Introduction to getlinked </h1>
                        <h1 style={{ color: '#D434FE' }} >tech Hackerthon 1.0 </h1>
                        </div>
                  <img src='./biggerStar.svg' alt='img' />
            </div>
              <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as 
                  clear as day: to shape the future. Whether you're a coding genius, a 
                  design maverick, or a concept wizard, you'll have the chance to transform
                  your ideas into reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the world,
                    that's what we're all about!
                    </p>
                    </div>
            </section>
            </IdeaStyle>
  )
}

export default Idea