import styled from "styled-components"
export const Steptiao = styled.div`
    display:flex;
    overflow:hidden;
    padding:0 0.1rem;
    justify-content:space-between;
    .am-wingblank.am-wingblank-lg{
        width:1rem
    }
    .am-steps-vertical .am-steps-item{
        height:1rem
    }
    .am-wingblank.am-wingblank-lg{
        margin:0
    }
    .Steptiao_right a{
        width:1.96rem;
        height:0.85rem;
        overflow:hidden;
        display:flex;
        background:#fff;
        padding:0.05rem;
        justify-content:space-between;
        margin-top:0.1rem;
    }
    .Steptiao_right{
        padding-left:0.1rem
    }
    .Steptiao_right a span:nth-child(1){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .Steptiao_right a span:nth-child(1) p{
        width:1.3rem;
        font-size: 0.12rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .Steptiao_right a span:nth-child(2){
        width:0.68rem;
        height:0.68rem
    }
    .Steptiao_right a span:nth-child(2) img{
        width:100%;
        height:100%
    }
   
` 