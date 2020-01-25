import React from 'react';
import { Link, animateScroll  } from "react-scroll";
import {Container, SubConteiner} from './Style'
export default class NavBar extends React.Component{
    render(){
        return(
            <Container className="navBar">  
                 
                    <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}> Home</Link>
                        <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}> About</Link>
                        <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}> Projects</Link>    
            </Container>
        )
    }
}
