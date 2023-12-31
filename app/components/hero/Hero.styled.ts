import styled from 'styled-components';

export const HeroStyle = styled.div`
        border-bottom: 1px solid  rgb(47, 51, 54, 0.4);
        .hero{
             .revolution{
            position: relative;
            display: flex;
            justify-content: flex-end;
            width: 90%;
            padding-top: 20px;
            /* border: 3px blue solid; */
            .vectorLine{
                position: absolute;
                right: 10px;
                bottom: -15px;
                width: 160px;
            }
        }
              h3{
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 24px;
            font-style: italic;
            display: flex;
            justify-content: flex-end;
        }
        }
.heroContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 40px;
    /* border: 2px red solid; */
   
    .heroStyle{
        position: relative;
        z-index: 1;
        /* border: 2px yellow solid; */
         
        .textContainer{
            position: relative;
            /* border: 2px yellow solid; */
             .star{
            position: absolute;
            left: 50px;
            top: -100px;
            z-index: 1;
        }
             .heroText{
                font-family : 'Clash Display';
                font-weight: 700;
                font-size: 80px;
                position: relative;
                /* border: 2px yellow solid; */
            }
             .bulb{
                position: absolute;
                right: 280px;
                top: -50px;
            /* width: 100%;
            height: auto; */
                }
           
        }
         .subHero{
                display: flex;
                align-items: center;
                gap: 5px;
                /* border: 2px red solid; */
                h1{
                font-family : 'Clash Display';
                font-weight: 700;
                font-size: 80px;
                display: flex;
                align-items: center;
                gap: 5px;
                }
                .chain{
                     width: 100%;
            height: auto;
            max-width: 80px;
                }
                 .fire{
            width: 100%;
            height: auto;
            max-width: 60px;
           
        }
       
        }
        .countDown{
            display: flex;
            align-items: center;
            gap: 25px;
            h1{
                font-family : 'Unica One';
                font-weight: 500;
                font-size: 64px;
                span{
                    font-size: 16px;
                }
            }
        }
        p{
            font-family: 'Montserrat';
            font-size: 20px;
            line-height: 30px;
        }
        button{
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #D434FE;
            color: #fff;
            font-size: 20px;
            padding: 10px 25px;
            border-radius: 5px;
            margin-top: 30px;
            margin-bottom: 70px;
            font-family: 'Montserrat';
        }
        .eclipse{
            position: absolute;
             max-width: 700px;
            width: 100%;
            height: auto;
             position: absolute;
             top: 20%;
             left: 50%;
             transform: translate(-50%, -50%);
            z-index: -1;
            opacity: 0.5;
            /* border: 3px red solid; */
        }
    }
    .heroImageContainer{
        /* border: 2px red solid; */
        position: relative;
        .topStar{
            position: absolute;
            top: 60px;
            left: 30px;
            width: 20px;
        }
      
        .heroImage{
            max-width: 600px;
            width: 100%;
            height: auto;
        }
        .orb{
             max-width: 500px;
            width: 100%;
            height: auto;
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
             /* opacity: 0.7; */
        }
        .star2{
            position: absolute;
            left: -100px;
            bottom: 150px;
        }
        .eclipse2{
            position: absolute;
            top: 30%;
             left: 80%;
             transform: translate(-50%, -50%);
             opacity: 0.5;
             /* z-index: -1; */
             max-width: 600px;
            width: 100%;
            height: auto;
        }
       
    }
     a{
        /* background-color: rgb(144, 58, 255, 100%); */
        background-color: #D434FE;
        padding: 10px 35px;
        border-radius: 5px;
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
    }
}
`