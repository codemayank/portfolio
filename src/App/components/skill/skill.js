import React from 'react';
import mongoDB_logo from './logos/mongodb.svg';

const skillStyle={
    padding: '0.5% 3% 3% 0.5%',
}

const skills = [
    {
        logo: <div style={{color: '#F0DB4F'}} ><i className="fab fa-js fa-4x"></i></div>,
        name: 'Javascript',
        alt: 'Javascript_logo'
    },
    {
        logo: <div style={{color: '#68A063'}}><i className="fab fa-node-js fa-4x"></i></div>,
        name: 'NodeJS',
        alt: 'NodeJS_logo'
    },
    {
        logo: <div style={{color: '#61DBFB'}} ><i className="fab fa-react fa-4x"></i></div>,
        name: 'React',
        alt: 'React_logo'
    },
    {
        logo: <img className="ui large image" src={mongoDB_logo} alt="mongoDB"/>,
        name: 'MongoDB',
        alt: 'MongoDB_logo'
    }
]

export const Skill = (props) => {
    const skillsView = skills.map(skill => {
        return (
            <div className="four wide column">

                {skill.logo}
            </div>
        )
    })
    const { columnWidth, backgroundStyle} = props
    return (
        <div className={columnWidth} style={skillStyle}>
            <div className="ui segment" style={backgroundStyle}>
                <h3 className="ui header" style={{color: 'white'}}>Skills</h3>

                <div className="ui divider"></div>
                <div className="ui grid">
                    {skillsView}
                </div>
            </div>
        </div>
    )
}