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
            speach: "Ayo Onasanya is the Founder and Director at Acumen Digital, an award-winning product development agency that helps businesses and individuals build products that scale. Acumen has provided digital transformation services for leading companies including Casio, PharmAccess Foundation, Union Bank, Lagos Business School, Trove, WalletAfrica, Spleet to mention a few; shape their brand image and overall product experience. Ayo has been helping companies plan, design and develop their digital products for over eight years. He has worked closely with early-stage startups, as well as enterprise and publicly traded companies.",
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
            speach: "James Baduor is the Cofounder and Chief Product Officer at ADPList, a platform with a mission to democratise mentorship worldwide. Also, a designer and tech entrepreneur whose main goal is to use community-driven initiatives and education to grow amazing talents in Africa.",
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
            speach: "Victor Fatanmi is the co-founder of Fourth Canvas, a design agency credited for delivering awesomeness on successful presidential election media campaigns in Nigeria and Ghana as well on famous online media campaigns like the #StopEbola (2014) & a growing number of brand identity projects for businesses in Lagos and New York. He grew up with a curiosity about designs and brands. Prior to co-founding the agency FourthCanvas, he worked as a graphic designer at the inception of the unconventional Rele Gallery, and was art director at Red Media Africa. He has supported over 100 young and upwardly mobile graphic designers using different platforms through training in the art and craft of graphic design.",
            twitter: "https://twitter.com/ZeroToProDesign",
            instagram: "https://www.instagram.com/victorfatanmi",
            schedule: "May 22, 5pm GMT+1",
            linkedin: "https://www.linkedin.com/in/victorfatanmi/",
        },
        {
            id: 4,
            name: "Nandi Manning",
            stack: "Founder, UX HER",
            img: designer_3,
            speach: "UX HER Founder, Nandi Manning, is a User Experience Designer with 4 years of experience bringing digital products to market. Upon entering the design industry in 2017, Nandi soon realized that none of her teammates looked like her or shared her lived experiences. She found it challenging to navigate her career in user experience design alone. Not knowing other women of color in her profession, she started searching for other women of color in her industry online. All of the women she came in contact with yearned for the same thing: community. With this need, she created UX HER.",
            instagram: "https://www.instagram.com/nandimanning/",
            linkedin: "https://www.linkedin.com/in/nandi-manning-bb7a7593/",
            schedule: "May 29, 5pm GMT+1",
        }
    ]

    return (
        <SpeakerStyle id="speaker">
            <div className="container">
                <h1>speakers</h1>
                {data.map(speaker => (
                    <SpeakerCard key={speaker.id} name={speaker.name} img={speaker.img} stack={speaker.stack} speach={speaker.speach} twitter={speaker.twitter} instagram={speaker.instagram} linkedin={speaker.linkedin} schedule={speaker.schedule} />
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