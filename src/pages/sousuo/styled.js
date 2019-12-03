import styled from 'styled-components';

export const SousuoHeader = styled.div`
    width:100%;
    height:100%;
    .am-search {
      border-bottom: 1px solid #ddd;
    }
    .sub-title {
      color: #888;
      font-size: 14px;
      padding: 30px 0 18px 0;
    }
    .xuanran{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      padding-top:0.45rem;
      height:100%;
      overflow-y:auto;
    }
    .xuanran>div{
      background:#fff;
      height:1.05rem;
      width:100%;
      overflow: hidden;
      border-bottom:1px solid #ddd;
      padding:0.1rem;
      display:flex;
      flex-direction:column;
      justify-content:space-around
    }
    .xuanran div li:nth-child(1){
      font-weight:bold;
      display:flex;
      height:0.18rem
    }
    .xuanran div li:nth-child(1) p{
      font-size:0.14rem;
      width:2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis
    }
    .xuanran div li:nth-child(1) span{
      font-size:0.14rem;
      width:0.7rem
    }
    .xuanran div li:nth-child(2){
      display:flex;
      font-size:0.12rem;
      height:0.27rem;
      overflow:hidden;
      color:#666
    }
    .xuanran div li:nth-child(3){
     font-size:0.12rem
    }
    .history p{
      font-size:0.14rem;
      margin-left:0.1rem;
      margin-top:0.1rem
    }
`