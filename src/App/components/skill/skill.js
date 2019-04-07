import React from 'react';
import mongoDB_logo from './logos/mongodb.svg';

const skillStyle={
    padding: '0.5% 3% 3% 0.5%',
}

const skills = [
    {
        logo: <div style={{color: '#F0DB4F'}} ><i class="fab fa-js fa-7x"></i></div>,
        name: 'Javascript',
        alt: 'Javascript_logo'
    },
    {
        logo: <div style={{color: '#68A063'}}><i class="fab fa-node-js fa-7x"></i></div>,
        name: 'NodeJS',
        alt: 'NodeJS_logo'
    },
    {
        logo: <div style={{color: '#61DBFB'}} ><i class="fab fa-react fa-7x"></i></div>,
        name: 'React',
        alt: 'React_logo'
    },
    {
        logo: <img className="ui medium image" src={mongoDB_logo} alt="mongoDB"/>,
        name: 'MongoDB',
        alt: 'MongoDB_logo'
    }
]

export const Skill = () => {
    const skillsView = skills.map(skill => {
        return (
            <div className="six wide column">
                {skill.logo}
            </div>
        )
    })
    return (
        <div className="eight wide column" style={skillStyle}>
            <div className="ui segment">
                <h3 className="ui header">Skills</h3>
                <div className="ui divider"></div>
                <div className="ui grid">
                    {skillsView}
                </div>
            </div>
        </div>
    )
}