import styled from "styled-components"
export const Detail_main = styled.div `
    img{
        width:100%;
        height:3.2rem;
        display:block;
    }
    .desc{
        padding:0.085rem 0.13rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:0.85rem;
        background:#fff;
        border-bottom:0.01rem solid #e8e8e8;
    }
    .desc>p{
        font-size:13px;
    }
    .desc>div{
        display:flex;
        justify-content:space-between;
        p span:nth-last-of-type(1){
             font-size:13px;
             color:#aa0000;
        }
        p span:nth-last-of-type(2){
             font-size:13px;
             color:#999;
        }
        p span:nth-last-of-type(3){
             font-size:13px;
             color:#ff9c00;
        }
    }
    .size{
        height:0.43rem;
        display:flex;
        justify-content:space-between;
        padding:0 0.1rem;
        line-height:0.43rem;
        background:#fff;
        p{
            font-size:13px;
        }
    }
    .iconfont.iconiconfonti{
        font-size:30px;
        color:#c9c9c9;
    }
`