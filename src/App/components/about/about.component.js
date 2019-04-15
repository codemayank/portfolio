import React, { Component } from 'react';
import './about.css';

const aboutStyle = {
    'padding': '3%',
    'paddingBottom': '0.5%',
}

export class About extends Component {
    render() {
        const { columnWidth, backgroundStyle } = this.props
        return (
            <div className={columnWidth} style={aboutStyle}>
                <div className="ui segment about" style={backgroundStyle}>
                    <div className="ui grid about-head">
                        <h1 className="eight wide column ui header" style={{ color: 'white' }}>
                            Hi, I'm Mayank
                    </h1>
                        <div className="eight wide column ui horizontal list social-links">
                            <div className="item">
                                <a href="https://twitter.com/ma112" target="blank"><i className="fab fa-twitter fa-2x social-icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="www.linkedin.com/in/mayank-yadav-a9493b34" target="blank"><i className="fab fa-linkedin-in fa-2x social-icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="https://github.com/codemayank" target="blank"><i className="fab fa-github fa-2x social-icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="mailto:mayankyadav14@gmail.com"><i className="far fa-envelope fa-2x social-icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ui divider"></div>
                    <div>
                        <picture>
                            <img className="ui centered small circular image about-image" src="https://i.imgur.com/NwQCbwA.jpg" alt="mayank-avatar" />
                        </picture>
                        <div className="ui vertical segment about-description">
                            <p>
                                Hi, My name is mayank I am a Web developer from Mumbai.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}