import React from 'react'
import projectRuby from '../Images/projectRuby.png'
import todolist1 from '../Images/todolist2.png'
import mealpicker from '../Images/mealpicker.png'

import { FaGithubSquare ,  FaCode } from 'react-icons/fa';
import './Style.scss'
export default class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        projects: [
            {
              title: "RdFlix",
              photo: require( "../Images/projectRuby.png" ),
              description: "Web App to search for your favourite movies",
              demo:"https://gaseifx02-project2.herokuapp.com/",
              code:"https://github.com/ThiagoDeiro/gaseifx02-project2"
            }, 
           {
              title: "Meal-Picker",
              photo:require( "../Images/mealpicker.png" ),
              description: "Web App to search for the best restaurents in Sydney or spinn the wheal and let the destiny choose for you",
              demo:"https://thiagodeiro.github.io/project-meal-picker/",
              code:"https://github.com/ThiagoDeiro/project-meal-picker"
            },
            {
                title: "Todos",
                photo: require( "../Images/todolist2.png" ),
                description: "ToDo list is a simple app  to get your daily tasks in order not to miss anything.",
                demo:"https://thiagodeiro.github.io/gaseifx01-project01/",
                code:"https://github.com/ThiagoDeiro/gaseifx01-project01"
              }, 
        ]
        }
    }
    render(){
            const cards = this.state.projects.map(p => 
            <div class="container">
                <div className="divPic">
                    <img src={p.photo}  className="image" />
                </div>
                <div class="overlay">
                  <div class="text">{p.title}</div>
                  <div class="ImgContent"><p>{p.description}</p></div>
                  <div className="imgSocial">
                    <a href={p.demo} class="ImgIcon" target="_blank" rel="noopener noreferrer"><FaGithubSquare></FaGithubSquare></a>
                    <a href={p.code} class="ImgIcon" target="_blank" rel="noopener noreferrer"><FaCode></FaCode></a>
                  </div>
                </div>
             </div>)
        return(
        <div>
            <div className='content' id='project'>
               
                    <h2 className='projectTitle'>Projects</h2>
               
                    <div className="main">
                        {cards}
                    </div>
                </div>
        </div>
        )
    }
}