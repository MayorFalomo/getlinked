import styled from 'styled-components'

export const NavStyle = styled.div`
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:25px;
    border-bottom: 1px solid  rgb(47, 51, 54, 0.4);
    h1{
        font-size: 35px;
        font-family: 'Clash Display';
        span{
            color: #d434fe;
        }
    }
    ul{
        display: flex;
        align-items: center;
        gap: 20px;
        li{
            cursor: pointer;
            font-family: 'Montserrat';
            font-size: 16px;
            font-weight: 400;
        }
         .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #fff;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
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