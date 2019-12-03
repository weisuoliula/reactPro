import React from 'react';
import {Mains} from './styled'
import Nav from '../nav';
import List from '../list';
import Slider from '../slider';
// import "./index.css"
class Main extends React.Component{
    render(){
        return(
           <Mains>
               <Slider/>
               <Nav/>
               <List/>
           </Mains>
        )
    }
}
export default Main