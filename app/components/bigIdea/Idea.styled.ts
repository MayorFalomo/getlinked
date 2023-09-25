import styled from 'styled-components';

export const IdeaStyle = styled.div`
        border-bottom: 1px solid  rgb(47, 51, 54, 0.4);
section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 40px auto;
    .imgContainer{
        position: relative;
        .smallerStar{
            position: absolute;
            left: -30px;
            top: 200px;
        }
        .lightBulb{
            width: 100%;
            height: auto;
            max-width: 500px;
        }
        .arrow{
            position: absolute;
            right: -30px;
            bottom: -30px;
        }
    }
    .ideaContainer{
        /* border: 2px red solid; */
        width: 40%;
         .flexText{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        h1{
            font-family: 'Clash Display';
            font-size: 32px;
        }
    }
    p{
        line-height: 30px;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 20px;
    }
    }
   
}
`