import React from 'react';
import Styled from 'styled-components';

const About = () => {
    return (
        <AboutStyle>
            <div className="container">
                <div className="aboutContainer">
                    <h3>ABOUT <br/> DESIGNERS NOW FOUNDERS</h3>
                    <h6>Connecting with exceptional minds</h6>
                    <p>Anim culpa ipsum nisi deserunt pariatur anim pariatur duis irure quis ullamco minim duis laboris. 
                    Dolor quis do deserunt deserunt in excepteur laborum cillum minim qui commodo aliqua enim.  
                    </p>
                    <p>Cillum et commodo nisi officia eiusmod ullamco occaecat in do enim quis magna nulla pariatur. 
                    Qui officia culpa minim consectetur quis velit dolor mollit ea incididunt irure culpa.  
                    </p>
                    <p>Fugiat consequat minim enim amet ad cupidatat anim ut nulla labore incididunt. In voluptate qui veniam magna. 
                    Esse irure consequat tempor nostrud. Qui laborum sint exercitation mollit do ad consequat do voluptate 
                    </p>
                    <p className="mb-5">Excepteur consequat nostrud irure ea ex aute exercitation reprehenderit sint eu nulla. Ipsum quis non 
                    reprehenderit qui consequat ipsum qui anim anim do proident pariatur quis.
                    </p>
                    <a href="./#register">REGISTER NOW</a>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About;

const AboutStyle = Styled.section`
    width: 100%;
    min-height: 100vh;

    .aboutContainer {
        width: 100%;
        max-width: 590px;
        margin: 0 auto;

        h3 {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            color: #fff;
            line-height: 127.66%;
        }

        h6 {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            font-size: 1.125rem;
            color: #FFF;
            line-height: 127.66%;
            margin-bottom: 20px;
        }

        p {
            font-family: "Proxima Nova", sans-serif;
            font-size: 1rem;
            line-height: 1.4rem;
            font-weight: 400;
            color: #ebebeb;
        }

        a {
            padding: 1.1rem 4rem;
            background: #FEDA00;
            border-radius: 50px;
            color: #060858;
            text-transform: uppercase;
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
        }
    }
`;