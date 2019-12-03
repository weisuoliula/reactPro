import styled from 'styled-components';


export const Navs = styled.div`
    height:1.4rem;
    background:#fff;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .col{
        width:20%;
    }
    .col a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon-nav-destination{
        color: rgb(54, 170, 43);
        font-weight: 400;
        font-size:0.28rem;
    }
    .icon-nav-restaurant{
        color:#f90;
        font-weight: 400;
        font-size:0.28rem;
    }
    .col a i{
        font-size:0.10rem;
        color:#000
    }
`