import React from 'react'
import './style.css'
export default class About extends React.Component{
    render(){
        return(
        <div style={{width:'100vh', height:'100vh'}} >
            <header class="header" id='about'>
                <div class="header__text-box">
                    <div class="heading-primary">
                        <div className='img-box'>
                            <img alt='' class='user'></img>
                        </div>
                        <div class="heading-primary--main">
                        <h2  id="aboutTitle">About me</h2>
                        </div>
                        <div class="heading-primary-container">
                            <p class="heading-primary--sub">I am a Sydney based Junior Front-End Developer with a background in law and customer service. I came upon coding with a head full of inspiration, having seen my previous workplaces transformed by web-based technologies.
                            I was always interested in the tech world and have a keen passion in the game industry, however I found myself going down the law school path to follow in my family's footprints. I never gave up my interest though and continued taking online courses, attending events and meetups, and kept up-to-date with the latest technology trends.
                            I finally made the decision to transition my career and enrolled in the Software Engineering Immersive course at General Assembly. I can't wait to start my journey as a developer and I am looking to work for a company where I can be challenged whilst learning and growing.</p>
                        </div>
                    </div>
                </div>
        </header>
     </div>
        )
    }
}