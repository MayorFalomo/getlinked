import styled from 'styled-components'

export const RuleStyle = styled.div`
   border-bottom: 1px solid  rgb(47, 51, 54, 0.4);
section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 40px auto;
    position: relative;
    .ruleContainer{
        width: 40%;
        position: relative;
        /* border: 2px red solid; */
        z-index: 1;
        h1{
            font-family: 'Clash Display';
            font-size: 32px;
        }
    p{
        line-height: 30px;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 20px;
    }
    .light{
        position: absolute;
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        z-index: -1;
    }
    .smallerStar{
        position: absolute;
         top: -10%;
        left: 40%;
        transform: translate(-50%, -50%);
    }
    .star{
        position: absolute;
        bottom: -40px;
        right: 0;
    }
    }
    .sittingWoman{
        width: 100%;
        max-width: 650px;
        height: auto;
    }
   .purpleLens{
    position: absolute;
    right: -150px;
    top: 0;
   }
}
`