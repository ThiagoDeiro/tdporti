import React from 'react'
import {Name, BoxText,Text, Social, Conteiner} from './TitleStyle'
import { FaGithubSquare, FaLinkedin, FaFileDownload,FaEnvelope } from 'react-icons/fa';
import resume from './resume/resume.pdf'

export default class Title extends React.Component{
    render(){
        return(
         <Conteiner id='home'>
            <BoxText >
                <Name style={{fontWeight:' 800', letterSpacing:'0.5rem'}} id='nameTitle'>Thiago Deiro</Name>
                <Text>Junior Front-End <br/> Developer</Text>
                <Social>
                    <a style={{color:"white"}} href='https://github.com/ThiagoDeiro' target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
                    <a style={{color:"white"}} href='https://www.linkedin.com/in/thiago-deiro-bb2b49190/' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    <a  style={{color:"white"}} href="mailto:thdeiro@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope/>
                    </a>
                    <a  style={{color:"white"}} href={resume} target="_blank" rel="noopener noreferrer" download><FaFileDownload/>
                    </a>
                    
                    
                </Social>
                {/* <Main /> */}
            </BoxText>
         </Conteiner>
        )
    }
}