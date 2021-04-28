import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

// React share
import {
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

// images
import logoBlack from '../assets/images/logoBlack.svg';
import designer_1 from '../assets/images/designer_1.jpg';
import designer_2 from '../assets/images/designer_2.jpg';
import designer_3 from '../assets/images/designer_3.jpg';
import designer_4 from '../assets/images/designer_4.jpg';
import colorPattern from '../assets/images/color_pattern.png';

const Response = () => {
    return (
        <ResponseStyle>
            <div className="container">
                <img className="pattern" src={colorPattern} alt="background pattern"/>
                <div className="row">
                    <div className="col-md-6 content">
                        <Link to="/">
                            <img src={logoBlack} className="logo" alt="perxels logo"/>
                        </Link>
                        <h2 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">Thanks for Registering</h2>
                        <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">You will receive a calendar invite in your mail 
                            with the meeting link to the series.</p>
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000" className="social_share">
                            <p>Share event</p>
                            <div className="share_icons">
                                <TwitterShareButton url="https://dnf-kappa.vercel.app" title="Designers now Founders" >
                                    <AiOutlineTwitter className="icons" />
                                </TwitterShareButton>

                                <LinkedinShareButton 
                                    url="https://dnf-kappa.vercel.app" 
                                    title="Designers now Founders" 
                                    summary="We are bringing in experienced product designers who are now founder's of thriving companies and organisations to come speak with you in this series so you can learn from their thought process, expand your problem solving skills and be inspired to take up more challenge"
                                    source="https://dnf-kappa.vercel.app" >
                                    <FaLinkedinIn className="icons" />
                                </LinkedinShareButton>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" className="row img-grid d-flex justify-content-center align-items-center">
                            <div className="col-4">
                                <img src={designer_1} alt="designers face"/>
                            </div>
                            <div className="col-4">
                                <img src={designer_2} alt="designers face"/>
                                <img src={designer_3} className="mt-4" alt="designers face"/>
                            </div>
                            <div className="col-4">
                                <img src={designer_4} alt="designers face"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ResponseStyle>
    )
}

export default Response;

const ResponseStyle = Styled.section`
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #fff;

    .container {
        position: relative;

        .pattern {
            position: absolute;
            width: 100%;
            height: auto;
            pointer-events: none;

            @media (max-width: 768px) {
                bottom: -2rem;
                width: 130%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    .content {
        margin: 7rem 0;

        @media (max-width: 768px) {
            margin: 4rem 0;
        }

        .logo {
            width: 7.3rem;
            height: auto;
            margin-bottom: 5.375rem;
        }

        h2 {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            color: #34296B;
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        p {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 400;
            font-size: 1.2rem;
            color: #34296B;
            max-width: 479px;
        }

        .social_share {
            display: flex;
            align-items: center;

            p {
                font-family: "Proxima Nova", sans-serif;
                font-weight: 400;
                font-size: 1.2rem;
                color: #000;
                padding-bottom: 0;
                margin-bottom: 0;
                margin-right: 1.5rem;
            }

            .share_icons {
                width: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .icons {
                    color: #4D4D4D;

                    &:hover {
                        color: #34296B;
                    }
                }
            }
        }
    }

    .img-grid {
        margin-top: 7rem;

        @media (max-width: 768px) {
            margin-top: 0;
        }

        img {
            width: 100%;
            height: auto;
        }
    }
`;