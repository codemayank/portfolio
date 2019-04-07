import React from 'react';
import './about.css';

const aboutStyle = {
    'padding': '3%',
    'padding-bottom': '0.5%'
}
export const About = () => {
    return (
        <div className="six wide column" style={aboutStyle}>
            <div className="ui segment">
                <div class="ui grid">
                    <h1 className="eight wide column ui header">
                        Mayank
                    </h1>
                    <div className="eight wide column ui horizontal list social-links">
                        <div className="item">
                            <a href=""><i class="fab fa-twitter fa-2x"></i></a>
                        </div>
                        <div className="item">
                            <a href=""><i class="fab fa-linkedin-in fa-2x"></i></a>
                        </div>
                        <div className="item">
                            <a href=""><i class="fab fa-github fa-2x"></i></a>
                        </div>
                        <div className="item">
                            <a href=""><i class="far fa-envelope fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <picture className="about-image">
                    <img className="ui centered small circular image" src="https://i.imgur.com/NwQCbwA.jpg" alt="mayank-avatar" />
                </picture>
                <div className="ui vertical segment">
                    <p className="about-description">
                        Hi, My name is mayank I am a Web developer from Mumbai.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                    </p>
                </div>
            </div>
        

                
        </div>
    )
}