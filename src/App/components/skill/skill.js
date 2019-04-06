import React from 'react';
import './skills.css'

export const Skill = () => {
    return (
        <div className="skill">
            <center>
                <h1>Skills</h1>
            </center>
            <div className="skills-wrapper">
                <div className="javascript">
                    <center>Javascript</center>
                </div>
                <div className="nodejs">
                    <center>Nodejs</center>
                </div>
                <div className="mongodb">
                    <center>MongoDB</center>
                </div>
                <div className="react">
                    <center>React</center>
                </div>
                <div className="AngularJS">
                    <center>AngularJS</center>
                </div>
            </div>
        </div>
    )
}