import React from 'react';
import Styled from 'styled-components';
import SpeakerCard from './SpeakerCard';

import designer_2 from '../assets/images/designer_2.jpg';
import designer_5 from '../assets/images/designer_5.jpg';
import designer_7 from '../assets/images/designer_7.jpg';
import designer_8 from '../assets/images/designer_8.jpg';

const Speaker = () => {

    let data = [
        {
            id: 1,
            name: "Abiodun Okunade",
            stack: "Product Designer",
            img: designer_5,
            speach: "Lorem mollit amet adipisicing ad id esse Lorem nisi exercitation ea consectetur. Sint consectetur anim in ex ullamco consectetur qui sint. Sit quis labore fugiat nisi magna. Minim occaecat est nisi sit minim reprehenderit ipsum ex exercitation. Eu labore eiusmod culpa aliqua nulla commodo. Dolor minim commodo excepteur proident esse magna in reprehenderit et nulla irure consequat occaecat consequat. Id cupidatat nulla ea sint ea."
        },
        {
            id: 2,
            name: "Abiodun Okunade",
            stack: "Product Designer",
            img: designer_2,
            speach: "Lorem mollit amet adipisicing ad id esse Lorem nisi exercitation ea consectetur. Sint consectetur anim in ex ullamco consectetur qui sint. Sit quis labore fugiat nisi magna. Minim occaecat est nisi sit minim reprehenderit ipsum ex exercitation. Eu labore eiusmod culpa aliqua nulla commodo. Dolor minim commodo excepteur proident esse magna in reprehenderit et nulla irure consequat occaecat consequat. Id cupidatat nulla ea sint ea."
        },
        {
            id: 3,
            name: "Abiodun Okunade",
            stack: "Product Designer",
            img: designer_7,
            speach: "Lorem mollit amet adipisicing ad id esse Lorem nisi exercitation ea consectetur. Sint consectetur anim in ex ullamco consectetur qui sint. Sit quis labore fugiat nisi magna. Minim occaecat est nisi sit minim reprehenderit ipsum ex exercitation. Eu labore eiusmod culpa aliqua nulla commodo. Dolor minim commodo excepteur proident esse magna in reprehenderit et nulla irure consequat occaecat consequat. Id cupidatat nulla ea sint ea."
        },
        {
            id: 4,
            name: "Abiodun Okunade",
            stack: "Product Designer",
            img: designer_8,
            speach: "Lorem mollit amet adipisicing ad id esse Lorem nisi exercitation ea consectetur. Sint consectetur anim in ex ullamco consectetur qui sint. Sit quis labore fugiat nisi magna. Minim occaecat est nisi sit minim reprehenderit ipsum ex exercitation. Eu labore eiusmod culpa aliqua nulla commodo. Dolor minim commodo excepteur proident esse magna in reprehenderit et nulla irure consequat occaecat consequat. Id cupidatat nulla ea sint ea."
        }
    ]

    return (
        <SpeakerStyle>
            <div className="container">
                <h1>speakers</h1>
                {data.map(speaker => (
                    <SpeakerCard key={speaker.id} name={speaker.name} img={speaker.img} stack={speaker.stack} speach={speaker.speach} />
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
    }
`;