import React from 'react';
import Styled from 'styled-components';

import pattern from '../assets/images/pattern.svg';
import Header from './Header';

// Perxels logo
import logo from '../assets/images/logo.svg';

// Images
import designer_1 from '../assets/images/designer_1.jpg';
import designer_2 from '../assets/images/designer_2.jpg';
import designer_3 from '../assets/images/designer_3.jpg';
import designer_4 from '../assets/images/designer_4.jpg';

// Logo
import designer_1_logo from '../assets/images/designer_1_logo.svg';
import designer_2_logo from '../assets/images/designer_2_logo.svg';
import designer_3_logo from '../assets/images/desinger_3_logo.svg';
import designer_4_logo from '../assets/images/desinger_4_logo.JPG';

const Hero = () => {
    return (
        <HeroStyle>
            <Header />
            <div className="container">
                <div className="text-item">
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">DESIGNERS NOW <span>FOUNDERS</span></h3>
                    <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">Connecting with <span>Designers</span> that are now <span>Founders</span> in the Industry </p>
                </div>

                {/* Desktop */}
                <div className="d-none d-md-flex row align-items-center">
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-md-4 designers-card">
                        <img src={designer_1} alt="Ayo Onasanya face"/>
                        <h3>Ayo Onasanya</h3>
                        <p>Founder, Acumen Digital</p>
                        <img className="icon" src={designer_1_logo} alt="designer 1 logo"/>
                    </div>

                    <div className="col-md-4">
                        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="col-md-12 designers-card">
                            <img src={designer_2} alt="Ayo Onasanya face"/>
                            <h3>James Baduor</h3>
                            <p>Co-founder, ADPList</p>
                            <img className="icon" src={designer_2_logo} alt="designer 2 logo"/>
                        </div>
                        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className="col-md-12 designers-card mt-5">
                            <img src={designer_3} alt="Ayo Onasanya face"/>
                            <h3>Nandi Manning</h3>
                            <p>Founder, UX HER</p>
                            <img className="icon small" src={designer_4_logo} alt="designer 3 logo"/>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="col-md-4 designers-card">
                        <img src={designer_4} alt="Ayo Onasanya face"/>
                        <h3>Victor Fatanmi</h3>
                        <p>Founder, FourthCanvas</p>
                        <img className="icon" src={designer_3_logo} alt="designer 4 logo"/>
                    </div>
                </div>

                {/* Mobile */}

                <div className="d-flex d-md-none row">
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="col-6 designers-card">
                        <img src={designer_1} alt="Ayo Onasanya face"/>
                        <h3>Ayo Onasanya</h3>
                        <p>Founder, Acumen Digital</p>
                        <img className="icon" src={designer_1_logo} alt="designer 1 logo"/>
                    </div>

                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="col-6 designers-card pt-4">
                        <img src={designer_2} alt="Ayo Onasanya face"/>
                        <h3>James Baduor</h3>
                        <p>Co-founder, ADPList</p>
                        <img className="icon" src={designer_2_logo} alt="designer 1 logo"/>
                    </div>
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className="col-6 designers-card">
                        <img src={designer_3} alt="Ayo Onasanya face"/>
                        <h3>Nandi Manning</h3>
                        <p>UX HER Founder</p>
                        <img className="icon" src={logo} alt="designer 1 logo"/>
                    </div>
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" className="col-6 designers-card pt-4">
                        <img src={designer_4} alt="Ayo Onasanya face"/>
                        <h3>Victor Fatanmi</h3>
                        <p>Founder, FourthCanvas</p>
                        <img className="icon" src={designer_3_logo} alt="designer 1 logo"/>
                    </div>
                </div>

            </div>
        </HeroStyle>
    )
}

export default Hero;

const HeroStyle = Styled.section`
    width: 100%;
    min-height: 100vh;
    background: url(${pattern});
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 5rem;

    .text-item {
        width: 100%;
        max-width: 600px;
        margin-top: 7rem;

        @media (max-width: 768px) {
            margin-top: 4rem;
        }

        h3 {
            font-size: 3rem;
            text-transform: uppercase;
            max-width: 300px;
            color: #fff;
            font-family: "Proxima Nova", sans-serif;
            font-weight: 400;
            
            span {
                font-family: "Proxima Nova Bold", sans-serif;
                color: #FEDA00;
                font-weight: 700;
            }
        }

        p {
            font-size: 1rem;
            color: #fff;

            span {
                color: #1DB6BC;
            }
        }
    }

    

    .designers-card {
        width: 100%;

        img {
            width: 100%;
            height: auto;

            &.icon {
                width: 86px;
                height: auto;
                margin-top: -1rem;

                &.small {
                    width: 64px;
                }
            }
        }

        h3 {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: bold;
            color: #fff;
            font-size: 1.5rem;
            margin-top: 1rem;
        }

        p {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 400;
            color: #fff;
            font-size: 1rem;
        }

        @media (max-width: 768px) {
            margin-bottom: 1.5rem;


            h3 {
                font-size: 1rem;
            }

            p {
                font-size: .7rem;
            }

            img {
                &.icon {
                    width: 60px;
                }
            }
        }
        
    }
`;