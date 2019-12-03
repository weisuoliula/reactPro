import styled from "styled-components"
export const HeadContainer = styled.div `
    height: 0.76rem;
    background: #96b921;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 1.12rem;
        height: 0.48rem;
    }
    a{
        width: 0.68rem;
        height: 0.26rem;
        display: inline-block;
        border: 1px solid #ffffff;
        border-radius: 0.15rem 0.15rem;
        color: #f2f2f2;
        font-size: 13px;
        text-align: center;
        line-height:0.26rem;
    }
`
export const Register_main = styled.div `
    height: 100%;
    padding: 0.4rem 0.4rem 0;
    div>input{
        width: 2.6rem;
        height: 0.42rem;
        border: 0;
        border-bottom: 1px solid rgb(156, 154, 154);
        font-size: 12px;
        background:unset;
        padding-left:0.1rem;
    }
    div:nth-of-type(3){
        width: 2.6rem;
        height: 0.34rem;
        background: #bfbfbf;
        border-radius: 0.2rem 0.2rem;
        text-align: center;
        line-height: 0.34rem;
        box-shadow: 0 2px 10px 0 #bbb;
        margin: 0.3rem 0;
    }
`