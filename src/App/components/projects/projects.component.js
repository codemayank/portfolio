import React from 'react';
import './project.css';

const projectStyle={
    padding: '3%',
    paddingLeft: '0.5%'
}

export const Project = (props) => {
    const { columnWidth, backgroundStyle } = props; 

    return (
        <div className={columnWidth} style={projectStyle}>
            <div className="ui segment" style={backgroundStyle}>
                <h2>Projects</h2>
                <div className="ui divider"></div>
                <div className="ui divided items">
                    <div className="item">
                        <div className="content">
                            <a href="https://dashboard.insightheroes.co" className="header">Insight Heroes</a>
                            <div className="meta">
                                <span>Online Survey Platform</span>
                            </div>
                            <div className="description">
                                <p>Worked on creating the chat bot to collect survey data. Also integrated the chat bot with the existing app.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <a href="https://tranquil-taiga-89202.herokuapp.com/#!/" className="header" target="blank">Customer Support</a>
                            <a href="https://github.com/codemayank/customer-support" target="blank"><i className="fab fa-github fa-2x"></i></a>

                            <div className="meta">
                                <span className="cinema"></span>
                            </div>
                            <div className="description">
                                <p>A general ticket based customer support app made using Node.js, MongoDB, Express on backend and Angular.js on the front end.</p>
                                <p>The Project is can be divided in two parts User End accessible to the users / customers and Admin end accessible to the customer support team of the service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="ui segment">
                <h3 className="ui header">Projects</h3>
                <div className="ui divider"></div>
                <h3 className="ui header">
                    <div className="content head-project">
                        <a href="http://dashboard.insightheroes.co/">Insight Heroes</a>
                        <div className="sub header">Online Survey Platform</div>
                    </div>
                </h3>
                <div className="sub header project-description">
                <p>Implemented a chat bot for taking surveys and integrating it with Insight Heroes Backend.</p>
                    <div className="ui horizontal bulleted link list">
                        <span className="item">Node.js</span>
                        <span className="item">MongoDB</span>
                        <span className="item">Google Dialog Flow</span>
                    </div>
                </div>
                <h3 className="ui header">
                    <div className="content head-project">
                        <a href="https://tranquil-taiga-89202.herokuapp.com/#!/">Customer Support</a>
                        <div className="sub header">A ticket based Support System</div>
                    </div>
                </h3>
                <div className="sub header project-description">
                A Generic Ticket Based Support system for resolving queries on any platform
                    <div className="ui horizontal bulleted link list">
                        <span className="item">Node.js</span>
                        <span className="item">MongoDB</span>
                        <span className="item">AngularJS</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}