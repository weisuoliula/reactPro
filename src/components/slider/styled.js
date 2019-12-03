import styled from 'styled-components';

export const Sliders = styled.div`
    position:fixed;
    top:0.5rem;
    left:0;
    height:100%;
    width:1.5rem;
    z-index:2;
    background-color: hsla(0,0%,96%,.9);
    ul{
        display:flex;
        flex-direction:column;
        a{
            height:0.42rem;
            width:100%;
            line-height:0.42rem;
            text-align:center;
            font-size:0.12rem;
            color:#000
        }
    }
`