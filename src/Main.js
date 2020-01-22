import React from 'react'
import Particles from 'react-particles-js';
export default class Main extends React.Component{
    render(){
        return (
            <Particles 
              params={{
            		particles: {
                  number:{
                    value:40,
                    density:{
                      enable: true,
                      value_area: 800
                    }
                  }
                  
            		}
            	}}
              style={{
                width: '100%',
                height:'100vh',
                margin:'0',
                position: 'fixed'
              }}
            >
            </Particles>
        );
    };
}