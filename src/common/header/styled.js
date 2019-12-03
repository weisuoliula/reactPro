import styled from 'styled-components';

export const Headers = styled.div`
    display: flex;
    height: 0.52rem;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background:#fff;
    z-index:1;
    .header_left{
        display: flex;
        align-items: center;
            .showSideBar{
                width:0.48rem;
                height:0.48rem;
                line-height: 0.48rem;
                text-align: center;
                    .iconheader{
                        font-size:0.2rem;
                        color:#ccc;
                    }
            }
    }
    .header_sou{
        padding-right: 0.2rem;
            .iconsou{
                font-size:0.2rem;
                color:#ccc
            }
    }
   
`