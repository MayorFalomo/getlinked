import styled from 'styled-components';

export const CriteriaStyle = styled.div`
   border-bottom: 1px solid  rgb(47, 51, 54, 0.4);
.criteriaCon{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 100px auto;
    width: 90%;
    /* border: 2px red solid; */
    .flexCri{
        position: relative;
        border: 2px red solid;
        .star{
            position: absolute;
            right: 40px;
            bottom: 50px;
        }
        .smallerStar{
            position: absolute;
            left: 55%;
            top: 50%;
            transform: (-50%, -50%);
            /* right: 40px;
            bottom: 50px; */
        }
        .purple{
            position: absolute;
            left: -15%;
            top: 30%;
            transform: (-50%, -50%);
            width: 100%;
            max-width: 700px;
            height: auto;
            opacity: 0.5;
        }
    }
    .starCri{
        position: absolute;
        top: -80px;
        left: 150px;
    }
    .criteriaImg{
        height: auto;
        width: 100%;
        max-width: 750px;
    }
    .subContainer{
        width: 40%;
        /* border: 2px yellow solid; */
        h1{
            font-family: 'Clash Display';
            font-size: 32px;
            font-weight: 700;
        }
        .criteriaText{
            /* border: 2px red solid; */
            p{
                font-family: 'Montserrat';
                font-size: 18px;
                line-height: 30px;
                margin: 30px auto;
                span{
                    
                }
            }
        }
        a{
             background-color: #D434FE;
        padding: 10px 35px;
        border-radius: 5px;
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        }
    }
}
`