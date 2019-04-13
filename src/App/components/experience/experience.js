import React from 'react';

const experienceStyle = {
    padding: '3%',

    paddingTop: '0.5%'
}

export const Experience = (props) => {
    const {columnWidth, backgroundStyle} = props
    return (
        <div className={columnWidth} style={experienceStyle}>
            <div className="ui segment experience-item" style={backgroundStyle}>
                <div className="ui items">
                    <h3 className="ui header" style={{color: 'white'}}>Experience</h3>
                    <div className="ui divider"></div>
                    <div className="item">
                        <div className="ui small image">
                            <img src="http://dashboard.insightheroes.co/modules/core/client/img/insight-images/ih_logo_signin.png" alt="IH_LOGO" />
                        </div>
                        <div className="content">
                            <h3 className="header" style={{color:'white'}}>
                                Insight Heroes
                            </h3>
                            <div className="meta">
                                <span>FullStack Developer</span><span>(July 2018 - March 2019)</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

