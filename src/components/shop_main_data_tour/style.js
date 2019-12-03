import styled from "styled-components"
export const Shop_data = styled.div `
    width:100%;
        .box{
            margin-top:0.1rem;
            width:50%;
            padding:0 0.02rem 0 0.04rem;
            float: left;
            margin-bottom:0.1rem;
            .l{
                width:100%;
                border:0.01rem solid #e8e8e8;
                img{
                    width:1.52rem;
                    height:1.52rem;  
                }
                .l_bottom{
                    width:100%;
                    background:#f2f2f2;
                    padding:0.04rem;
                }
                p:nth-of-type(1){
                    font-size:12px;
                    color:#505050;
                    line-height:1.5em;
                }
                p:nth-of-type(2){
                    margin-top:0.05rem;
                }
                p:nth-of-type(2) span{
                    margin-right:0.04rem;
                }
                p:nth-of-type(2) span:nth-of-type(1){
                    color:#ff9c00;
                    font-size:0.16rem;
                    i{
                        font-size:0.12rem;
                    }
                }
                p:nth-of-type(2) span:nth-of-type(3){
                    color:#aa0000;
                    font-size:0.13rem;
                }
                p:nth-of-type(2) span:nth-of-type(2){
                    color:#999;
                    font-size:0.13rem;
                }
            }
        }  
    .load{
        width:2rem;
        height:0.3rem;
        background:#e8e8e8;
        margin-top:0.1rem;
        clear:both;
        color:#333;
        font-size:15px;
        border-radius:0.15rem 0.15rem;
        text-align:center;
        line-height:0.3rem;
        margin:0 auto;
        font-weight:550;
        margin-bottom:0.1rem;
    }
`