import React from "react";
import Styled from 'styled-components';

// icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillMediumSquare } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="text-center">
                <div className="social-icon">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.medium.com/@perxels"><AiFillMediumSquare className="icons" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/perxels"><AiOutlineTwitter className="icons" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/perxels/"><AiFillInstagram className="icons" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/perxels/"><FaLinkedinIn className="icons" /></a>
                </div>
            </div>
            <div className="text-center copy mt-4 mb-5">Copyright © Perxels 2021</div>
        </FooterStyle>
    )
}

export default Footer;

const FooterStyle = Styled.footer`
    width: 100%;
    min-height: 100px;

    .copy {
        color: #fff;
        font-size: 1.25rem;
        font-family: 'Proxima Nova', sans-serif;
    }

    .social-icon {
        width: 100%;
        max-width: 192px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            padding: 11.25px;
            border-radius: 50%;
            background: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background: #FEDA00;
            }

            .icons {
                font-size: 15.47px;
                color: #34296B;
            }
        }
    }
`;