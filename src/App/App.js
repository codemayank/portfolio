import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleOptions from './assets/particles.json'
import './App.css';
import { About } from './components/about/about.component';
import { Project } from './components/projects/projects.component';
import { Experience } from './components/experience/experience'
import { Skill } from './components/skill/skill';
class App extends Component {
    render() {
        const columnWidth = "sixteen wide tablet eight wide computer column";
        const backgroundStyle = {backgroundColor: 'black', color:'white', opacity:0.8};
        return (
            <div className="ui stackable two column grid container">
                <Particles className="particles" params={ParticleOptions} />
                <About columnWidth={columnWidth} backgroundStyle={backgroundStyle} />
                <Project columnWidth={columnWidth} backgroundStyle={backgroundStyle} />
                <Experience columnWidth={columnWidth} backgroundStyle={backgroundStyle} />
                <Skill columnWidth={columnWidth} backgroundStyle={backgroundStyle} />
            </div>
        )
    }
}


export default App;