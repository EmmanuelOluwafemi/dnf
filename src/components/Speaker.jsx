import React from 'react';
import Styled from 'styled-components';
import SpeakerCard from './SpeakerCard';

// Images
import designer_1 from '../assets/images/designer_1.jpg';
import designer_2 from '../assets/images/designer_2.jpg';
import designer_3 from '../assets/images/designer_3.jpg';
import designer_4 from '../assets/images/designer_4.jpg';

const Speaker = () => {

    let data = [
        {
            id: 1,
            name: "Ayo Onasanya",
            stack: "Founder, Acumen Digital",
            img: designer_1,
            speach: "Ayo Onasanya is the Founder and Director at Acumen Digital, an award-winning product development agency that helps businesses and individuals build products that scale. Acumen has provided digital transformation services for leading companies including Casio, PharmAccess Foundation, Union Bank, Lagos Business School, Trove, WalletAfrica, Spleet to mention a few; shape their brand image and overall product experience.",
            more: "new ne",
            twitter: "https://twitter.com/AyomideOnasanya",
            instagram: "https://www.instagram.com/ayo_onas/",
            schedule: "May 8, 5pm GMT+1",
            linkedin: "https://www.linkedin.com/in/ayomideonasanya/",
        },
        {
            id: 2,
            name: "James Baduor",
            stack: "Co-founder, ADPList",
            img: designer_2,
            speach: "I am the Cofounder and Chief Product Officer at ADPList, a platform with a mission to democratise mentorship worldwide. Also a designer and tech entrepreneur who's main goal is to use community-driven initiatives and education to grow amazing talents in Africa.",
            twitter: "https://twitter.com/jmsbaduor",
            instagram: "https://www.instagram.com/jmsbaduor/",
            schedule: "May 15, 5pm GMT+1",
            linkedin: "https://www.linkedin.com/in/jmsbaduor/",
        },
        {
            id: 3,
            name: "Victor Fatanmi",
            stack: "Founder, FourthCanvas",
            img: designer_4,
            speach: "Victor Fatanmi is the co-founder of Fourth Canvas, a design agency credited for delivering awesomeness on successful presidential election media campaigns in Nigeria and Ghana as well on famous online media campaigns like the #StopEbola (2014) & a growing number of brand identity projects for businesses in Lagos and New York. Victor Fa grew up with a curiosity about designs and brands.",
            more: "new ne",
            twitter: "https://twitter.com/ZeroToProDesign",
            instagram: "https://www.instagram.com/victorfatanmi",
            schedule: "May 22, 5pm GMT+1",
            linkedin: "https://www.linkedin.com/in/victorfatanmi/",
        },
        {
            id: 4,
            name: "Abiodun Okunade",
            stack: "Product Designer",
            img: designer_3,
            schedule: "",
            speach: "Lorem mollit amet adipisicing ad id esse Lorem nisi exercitation ea consectetur. Sint consectetur anim in ex ullamco consectetur qui sint. Sit quis labore fugiat nisi magna. Minim occaecat est nisi sit minim reprehenderit ipsum ex exercitation. Eu labore eiusmod culpa aliqua nulla commodo. Dolor minim commodo excepteur proident esse magna in reprehenderit et nulla irure consequat occaecat consequat. Id cupidatat nulla ea sint ea.",
        }
    ]

    return (
        <SpeakerStyle id="speaker">
            <div className="container">
                <h1>speakers</h1>
                {data.map(speaker => (
                    <SpeakerCard key={speaker.id} name={speaker.name} img={speaker.img} stack={speaker.stack} speach={speaker.speach} twitter={speaker.twitter} instagram={speaker.instagram} linkedin={speaker.linkedin} schedule={speaker.schedule} more={speaker.more} />
                )
                )}
            </div>
        </SpeakerStyle>
    )
}

export default Speaker;

const SpeakerStyle = Styled.div`
    width: 100%;
    min-height: 100vh;

    h1 {
        text-transform: uppercase;
        font-family: "Proxima Nova Bold", sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        color: #fff;
        margin: 1.5rem 0;

        @media (max-width: 768px) {
            margin-top: 5rem;
            margin-bottom: 3rem;
        }
    }
`;