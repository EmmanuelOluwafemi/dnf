import React, {useState} from 'react';
import Styled from 'styled-components';

// icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const SpeakerCard = ({name, img, stack, speach, twitter, instagram, linkedin, schedule, more}) => {

    // const [toggleMore, setMore] = useState(false);

    // const handleMore = () => {
    //     setMore(!toggleMore);
    // }

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
                    {/* <p>{speach} {more && !toggleMore ? <span onClick={handleMore}>Read More</span> : ''}</p> */}
                    {/* {toggleMore && <p>{more}</p>} */}
                    <div className="social-icon">
                        <a href={twitter}><AiOutlineTwitter /></a>
                        <a href={instagram}><AiFillInstagram /></a>
                        <a href={linkedin}><FaLinkedinIn /></a>
                        <span>{schedule}</span>
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

        span {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .social-icon {
        a {
            font-size: 1.5rem;
            color: #fff;
            margin-right: 1rem;
            cursor: pointer;

            &:hover {
                color: #FEDA00;
            }
        }

        span {
            font-family: "Proxima Nova Bold", sans-serif;
            font-weight: 700;
            font-size: 1rem;
            padding: 7px 1.07rem;
            color: #34296B;
            background: #FFF6BE;
            border-radius: 60px;
        }
    }
`;