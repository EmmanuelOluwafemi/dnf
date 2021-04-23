import React from 'react';
import Styled from 'styled-components';

// icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const SpeakerCard = ({name, img, stack, speach}) => {
    return (
        <SpeakerCardStyle>
            <div className="row">
                <div className="col-md-3">
                    <img src={img} alt="speaker face"/>
                </div>
                <div className="col-md-9">
                    <h3>{name}</h3>
                    <p>{stack}</p>
                    <p>{speach}</p>
                    <div className="social-icon">
                        <a href="twitter.com"><AiOutlineTwitter /></a>
                        <a href="instagram.com"><AiFillInstagram /></a>
                        <a href="linkedin.com"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </SpeakerCardStyle>
    )
}

export default SpeakerCard;

const SpeakerCardStyle = Styled.section`
    width: 100%;
    margin-bottom: 4rem;

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        font-weight: 700;
        font-family: "Proxima Nova Bold", sans-serif;
        font-size: 1.5rem;
        color: #FEDA00;
        margin: .7rem 0;
    }

    p {
        color: #fff;
        font-size: 1rem;
        max-width: 655px;
        width: 100%;
    }

    .social-icon {
        a {
            font-size: 1.5rem;
            color: #fff;
            margin-right: 1rem;

            &:hover {
                color: #FEDA00;
            }
        }
    }
`;