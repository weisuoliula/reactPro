import styled from 'styled-components';


export const Lists = styled.div`
    background:#fff;
    margin-top:0.15rem;
    .list_one{
    height:5.3rem;
    overflow:hidden;
}


.am-badge {
    font-size:0.14rem
}
.list_two{
    height:5rem;
    overflow: hidden;
}
.list_three{
    height:5.3rem;
    overflow:hidden;
}
.list_fore{
   height:5.3rem;
   background: #ddd;
   margin-top:-0.1rem
}
.list_five{
    height: 1.84rem;
    background: #fff;
}
.list_fore>p{
    height:0.43rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.43rem;
    padding:0 0.1rem;
}
.list_fore>p span{
    font-size:0.14rem;
    color: #000;
}
.list_fore>p a{
    font-size:0.12rem
}
.list_five>p{
    height:0.43rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.43rem;
    padding:0 0.1rem;
}
.list_five>p span{
    font-size:0.14rem;
    color: #000;
}
.list_five>p a{
    font-size:0.12rem
}
.list_one>a{
    font-size:0.12rem;
    position: absolute;
    right:0;
    padding-right:0.1rem;
    color:#666
}
.list_two>a{
    font-size:0.12rem;
    position: absolute;
    right:0;
    padding-right:0.1rem;
    color:#666
}
.list_three>a{
    font-size:0.12rem;
    position: absolute;
    right:0;
    padding-right:0.1rem;
    color:#666
}
.title{
    height:0.35rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    align-items: center;
}
.title a{
    font-size:0.14rem;
    width:0.84rem;
    height:0.35rem;
    text-align: center;
    line-height: 0.35rem;
}
.active{
    color:#000;
    position: relative;
    font-weight:400
}
.active .line{
    background-color: #96b921;
    position: absolute;
    width: 0.19rem;
    height: 0.05rem;
    border-radius:30%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.title_three{
    height:0.35rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
    align-items: center;
    margin-top:-0.1rem
}
.title_three a{
    font-size:0.14rem;
    width:0.84rem;
    height:0.35rem;
    text-align: center;
    line-height: 0.35rem;
}

.titleChildren li a{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:0.96rem;
    width:100%;
}
.titleChildrenLeft{
    width:1.02rem;
    height:0.7rem;
}
.titleChildrenLeft img{
    width:100%;
    height:100%
}
.titleChildrenRight{
    width:1.8rem;
    height:0.73rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.titleChildrenRight p:nth-child(1){
    overflow: hidden;
    width:1.8rem;
    height:0.3rem;
    font-size:0.14rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    color:#000
}
.titleChildrenRight p:nth-child(2){
    display: flex;
    justify-content: space-between;
}
.titleChildrenRight p:nth-child(2) span{
    font-size:0.12rem
}
.titleChildrenRight p:nth-child(2) span i{
    font-size:0.10rem
}
.column-banner{
    height:0.85rem;
    overflow: hidden;
    margin:0.1rem 0
}
.column-banner img{
    width:100%;
    height:100%;
}
.list_five ul{
    padding:0 0.1rem
}
.list_five ul li{
    display: flex;
    justify-content: space-between;
    height:0.25rem;
    align-items: center;
    margin-bottom:0.02rem
}
.list_five ul li i{
   width:0.3rem;
    height:0.2rem;
    border: 1px solid #ff9c00;
    border-radius: 0.05rem;
    font-size: 0.10rem;
    color: #ff9c00;
    text-align: center;
   line-height: 0.2rem;
}
.list_five ul li a{
    font-size:0.13rem;
    width:2.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list_six{
    height:2.01rem;
    background: #aaa;
}
.list_footer{
    height:1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding-top:0.1rem;
}
.list_six .list_footer p:nth-child(1){
    width: 1.2rem;
    height:1.2rem;
}
.list_six .list_footer p:nth-child(1) img{
    width:1.1rem;
    height:1rem
}
.list_six .list_footer p:nth-child(1) span{
    font-size: 0.12rem;
    color:#fff
}
.list_six .list_footer p:nth-child(2) span{
    font-size: 0.14rem;
    color:#fff;
    margin:0 0.1rem;
}
.list_footer_two{
    height:0.35rem;
    background: #fff;
    margin-top:0.16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.1rem;
}
.list_footer_two span{
    font-size:0.13rem;
}
.list_footer_two span:nth-child(1){
    color: #96b921
}
.list_footer_two span:nth-child(2){
    color: #aaa
}
`

