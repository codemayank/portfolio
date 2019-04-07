import React from 'react';
import './project.css';

const projectStyle={
    padding: '3%',
    'padding-left': '0.5%'
}

export const Project = () => {
    return (
        <div className="eight wide column" style={projectStyle}>
            <div className="ui segment">
                <h3 className="ui header">Projects</h3>
                <div className="ui divider"></div>
                <h3 className="ui header">
                    <div className="content head-project">
                        <a href="http://dashboard.insightheroes.co/">Insight Heroes</a>
                        <div className="sub header">Online Survey Platform</div>
                    </div>
                </h3>
                <p className="sub header project-description">Implemented a chat bot for taking surveys and integrating it with Insight Heroes Backend.</p>
            </div>
        </div>
    )
}