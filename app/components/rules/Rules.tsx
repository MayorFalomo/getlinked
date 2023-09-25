"use client"
import React from 'react'
import { RuleStyle } from './Rules.styled'

type Props = {}

const Rules = (props: Props) => {
    return (
      <RuleStyle>
      <section>
          <div className='ruleContainer' >
              <h1>Rules and </h1>
              <h1 style={{color: '#D434FE'}} >Guidelines </h1>
              <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as 
                  clear as day: to shape the future. Whether you're a coding genius, a 
                  design maverick, or a concept wizard, you'll have the chance to transform
                  your ideas into reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                    <img className='light' src='./purpleLens.svg' alt='img' />
                    <img className='smallerStar' src='./star2.svg' alt='img' />
                    <img className='star' src='./star.svg' alt='img' />
            </div>
          <img className='sittingWoman' src='./woman.png' alt='img' />
          <img className='purpleLens' src='./purpleLens1.svg' alt='img' />
            </section>
        </RuleStyle>
  )
}

export default Rules