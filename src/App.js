import React from 'react';
import Main from './Main'
import Title from './Components/Title'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import NavBar from './Components/Navegation/NavBar'
import './App.css';

class App extends React.Component {

  render(){
  return (
    <div style= {{width:'100%', height:'100vh', margin:'0', }}>
        <Main/>
        <NavBar/>
        <Title/>
        <About/>
        <Projects/>
    </div>
  );
  }
}

export default App;
