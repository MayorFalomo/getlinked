import React from 'react'
import { CriteriaStyle } from './Criteria.styled'

type Props = {}

const Criteria = (props: Props) => {
    return (
      <CriteriaStyle>
      <section>
                <div className="criteriaCon" >
                    <div className="flexCri" >
                        <img className='starCri' src='./biggerStar.svg' alt='img' />
                        <img className='criteriaImg' src='./criteria.png' alt='img' />
                        <img className='star' src='./star.svg' alt='img' />
                        <img className='smallerStar' src='./smallerStar.svg' alt='img' />
                        <img className='purple' src='./purpleLens.svg' alt='img' />
                    </div>
          <div className='subContainer' >
              <h1>Judging Criteria </h1>
              <h1 style={{color: '#D434FE'}}  >Key attributes </h1>
              <div className='criteriaText' >
                  <p>
                      <span  style={{color: '#FF26B9'}} > Innovation and Creativity </span> : Innovation and Creativity: Evaluate the uniqueness and creativity of the 
                      solution. Consider whether it addresses a real-world problem in a novel
                      way or introduces innovative features.
                  </p>

                <p>
                      <span  style={{color: '#FF26B9'}} > Functionality </span> : Assess how well the solution works. Does it perform its
                      intended functions effectively and without major issues? Judges would
                      consider the completeness and robustness of the solution..
                </p>
                            
                  <p>
                      <span  style={{color: '#FF26B9'}} >Impact and Relevance </span> : Determine the potential impact of the solution 
                      in the real world. Does it address a significant problem, and is it relevant 
                      to the target audience? Judges would assess the potential social,
                      economic, or environmental benefits..
                  </p>
                  <p>
                      <span  style={{color: '#FF26B9'}} > Technical and Complexity </span> : Evaluate the technical sophistication of the solution. 
                      Judges would consider the complexity of the code, the use of advanced
                      technologies or algorithms, and the scalability of the solution.
                  </p>
                  <p>
                      <span  style={{color: '#FF26B9'}} > Adherence to Hackathon Rules </span> : Judges will Ensure that the team adhered 
                      to the rules and guidelines of the hackathon, including deadlines, use of
                      specific technologies or APIs, and any other competition-specific requirements.
                  </p>
              </div>
              <a>Read More </a>
              </div>
              </div>
            </section>
            </CriteriaStyle>
  )
}

export default Criteria