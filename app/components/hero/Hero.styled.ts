import styled from 'styled-components';

export const HeroStyle = styled.div`
.heroContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    .heroStyle{
        position: relative;
        z-index: 1;
        border: 2px yellow solid;
        .textContainer{
            position: relative;
            /* border: 2px yellow solid; */
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
                    width: 100px;
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
                /* display: flex;
                align-items: center;
                gap: 5px; */
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
            margin-bottom: 50px;
            font-family: 'Montserrat';
        }
        .eclipse{
            position: absolute;
             max-width: 600px;
            width: 100%;
            height: auto;
             position: absolute;
             top: 30%;
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
        h3{
            font-family: 'Montserrat';
            font-weight: 400;
            font-size: 24px;
            font-style: italic;
            display: flex;
            justify-content: flex-end;
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
             opacity: 0.7;
        }
        .revolution{
            position: relative;
            .vectorLine{
                position: absolute;
                right: 10px;
                bottom: -15px;
                width: 160px;
            }
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