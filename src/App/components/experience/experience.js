import React from 'react';

const experienceStyle = {
    padding: '3%',
    'padding-top': '0.5%'
}

export const Experience = () => {
    return (
        <div className="six wide column" style={experienceStyle}>
            <div className="ui segment ui items experience-item">
                <h3 className="ui header">Experience</h3>
                <div className="ui divider"></div>
                <div className="item">
                    <div className="image">
                        <img src="http://dashboard.insightheroes.co/modules/core/client/img/insight-images/ih_logo_signin.png" alt="IH_LOGO" />
                    </div>
                    <div className="content">
                        <div className="header">
                            Insight Heroes
                        </div>
                        <div className="meta">
                            <span>FullStack Developer</span>
                        </div>
                        <div className="description">
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

