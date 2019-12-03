import styled from "styled-components"
export const Login_head = styled.div `
    height: 1.07rem;
    width: 100%;
    background: url(http://localhost:3000/img/login_bg.jpg) no-repeat;
    background-size: 100% 100%;
    padding: 0.2rem 0.3rem;
    display: flex;
    position: relative;
    img{
        width: 1.07rem;
        height: 0.51rem;
    }
    div{
        width: 0.68rem;
        height: 0.27rem;
        border: 1px solid #666;
        border-radius: 0.15rem 0.15rem;
        text-align: center;
        line-height: 0.27rem;
        font-size: 12px;
        color: #666;
        top: 25%;
        right: 10%;
        position: absolute;
    }
`
export const Login_main = styled.div `
    padding: 0.4rem 0.3rem;
    text-align: center;
    div>input{
        height: 0.42rem;
        border: 0;
        border-bottom: 1px solid rgb(150, 146, 146);
        padding-left: 0.05rem;
        background:unset;
    }
    div>label{
        color: #96b921;
        display: block;
        margin-top: 0.1rem;
    } 
    button{
        height: 0.34rem;
        width: 2rem;
        margin-top: 0.4rem;
        background:rgb(156, 154, 154);
        border: 0;
        border-radius: 0.15rem 0.15rem;
    }
`