import React from 'react';
import Styled from 'styled-components';

const About = () => {
    return (
        <AboutStyle id="about">
            <div className="container">
                <div className="aboutContainer">
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">ABOUT <br/> DESIGNERS NOW FOUNDERS</h3>
                    <h6 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">Connecting with exceptional minds</h6>
                    <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">A lot of times, young and aspiring UIUX designers limit the possibility of what they can do, 
                    they look at their role and work from a small perspective and it can limit their potential. </p>

                    <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500">We want to change that narrative, hence the reason for this series “Designer Now Founders” </p>

                    <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3000">The focus of the series is to show young designers how to become better in solving problems, look at 
                    situations from a broader perspective and create valuable solutions that can lead to the establishment of 
                    relevant businesses or companies.</p>

                    <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3500" className="pb-5">We are bringing in experienced product designers who are now founder's of thriving 
                    companies and organisations to come speak with you in this series so you can learn from their thought process, 
                    expand your problem solving skills and be inspired to take up more challenge</p>
                    <a data-aos="fade-right" data-aos-easing="linear" data-aos-duration="4000" className="mt-4" href="./#register">REGISTER NOW</a>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About;

const AboutStyle = Styled.section`
    width: 100%;
    min-height: 100vh;

    @media (max-width: 768px) {
        min-height: 60vh;
    }

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

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
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