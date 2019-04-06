import React from 'react';
import './App.css';
import { About } from './components/about/about.component';
import { Project } from './components/projects/projects.component';
import { Experience } from './components/experience/experience'
import { Skill } from './components/skill/skill';

const App = () => {
    return (
        <div className="wrapper">
            <About/>
            <Project />
            <Experience />
            <Skill />
        </div>
    )
};

export default App;