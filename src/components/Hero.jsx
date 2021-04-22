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
import designer_5 from '../assets/images/designer_5.jpg';
import designer_6 from '../assets/images/designer_6.jpg';
import designer_7 from '../assets/images/designer_7.jpg';
import designer_8 from '../assets/images/designer_8.jpg';

const Hero = () => {
    return (
        <HeroStyle>
            <Header />
            <div className="container">
                <HeroGrid>
                    <div className="gridItem text-item">
                        <h3>DESIGNERS NOW <span>FOUNDERS</span></h3>

                        <p>Connecting with <span>Designers</span> that are now <span>Founders</span> in the Industry </p>
                    </div>
                    <div className="gridItem small">
                        <div className="smallCard">
                            <img src={designer_1} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="designCard">
                            <img src={designer_2} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem small left">
                        <div className="smallCard shift-top-50">
                            <img src={designer_3} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem small left">
                        <div className="smallCard shift-top-100">
                            <img src={designer_4} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="designCard shift-top-50">
                            <img src={designer_5} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem small left">
                        <div className="smallCard shift-bottom-100">
                            <img src={designer_6} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="designCard shift-top-50">
                            <img src={designer_7} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="designCard shift-top-100">
                            <img src={designer_8} alt="designers face" />
                            <h6>Abiodun Okunade</h6>
                            <p>Team Lead</p>
                            <img class="logo" src={logo} alt="perxels logo"/>
                        </div>
                    </div>
                </HeroGrid>
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
    padding-bottom: 3rem;
`;

const HeroGrid = Styled.div`
    margin-top: 11.25rem;
    width: 100%;
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .gridItem {
        width: 100%;
        display: flex;
        flex-direction: column;

        .shift-top-50 {
            margin-top: -140px;
        }

        .shift-top-100 {
            margin-top: 0px;
        }

        img {
            width: 100%;
        }

        h6 {
            font-family: 'Proxima Nova Bold', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            color: #fff;
            margin-top: 12px;
        }

        p {
            font-family: 'Proxima Nova', sans-serif;
            font-weight: 400;
            font-size: .9rem;
            color: #fff;
        }

        .logo {
            width: 100px;
            height: auto;
            margin-top: -4px;
        }

        &.small {
            align-items: flex-end;

            &.left {
                align-items: flex-start;
            }

            .smallCard {
                width: 100%;
                max-width: 170px;

                &.shift-top-100 {
                    margin-top: -170px;
                }

                &.shift-top-50 {
                    margin-top: -100px;
                }

                &.shift-bottom-100 {
                    margin-top: 50px;
                }

                img {
                    width: 100%;
                    height: auto;

                    &.logo {
                        width: 100px;
                        height: auto;
                        margin-top: -4px;
                    }
                }
            }
        }
    }

    .text-item {
        grid-column-start: 1;
        grid-column-end: 3;

        h3 {
            font-size: 3rem;
            text-transform: uppercase;
            max-width: 300px;
            color: #fff;
            
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
`;