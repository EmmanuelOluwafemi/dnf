import React, {useState} from 'react';
import Styled from 'styled-components';

import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        console.log(data)
        setLoading(true);
        fetch("https://api.apispreadsheets.com/data/11609/", {
            method: "POST",
            body: JSON.stringify({"data": data}),
        }).then(res =>{
            if (res.status === 201){
                // SUCCESS
                setLoading(false);
                history.push('/response');
            }
            else{
                // ERROR
                setLoading(false);
                console.log(res);
            }
        })
    }

    return (
        <RegisterContainer>
            <div className="container">
                <RegisterStyle id="register">
                    <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="text-center">REGISTER HERE</h1>

                    <form data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" method="post" onSubmit={handleSubmit(onSubmit)} name="google-sheet">
                        <div className="inputGroup">
                            <label>Name</label>
                            <input type="text" name="name" {...register('name', { required: true })} />
                        </div>
                        <div className="inputGroup">
                            <label>Email</label>
                            <input type="email" name="email" {...register('email', { required: true })} />
                        </div>
                        <div className="inputGroup">
                            <label>Profession</label>
                            <input type="text" name="profession" {...register('profession', { required: true })} />
                        </div>
                        <div className="inputGroup">
                            <label>Location</label>
                            <input type="text" name="location" {...register('location', { required: true })} />
                        </div>
                        <div className="text-center">
                            <input className="buttonSubmit" type="submit" value={loading ? 'Loading...': 'Register'} />
                        </div>
                    </form>
                </RegisterStyle>
            </div>
        </RegisterContainer>
    )
}


export default Register;

const RegisterContainer = Styled.section`
    width: 100%;
    min-height: 100vh;
    margin: 8rem 0;
`;

const RegisterStyle = Styled.div`
    width: 100%;
    max-width: 715px;
    margin: 0 auto;

    h1 {
        font-family: 'Proxima Nova Bold', sans-serif;
        font-weight: 700;
        font-size: 1.9rem;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    form {
        width: 100%;
        background: #fff;
        padding: 6.75rem 6.25rem;
        border-radius: 20px;

        @media (max-width: 768px) {
            padding: 3rem 1.5rem;
        }

        .inputGroup {
            width: 100%;
            margin-bottom: 2.5rem;

            label {
                font-family: "Proxima Nova", sans-serif;
                font-size: 1.5rem;
                font-weight: 500;
                color: #373737;
                display: block;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            input {
                width: 100%;
                border: 1px solid #383838;
                border-radius: 10px;
                height: 48px;
                outline: none;
                padding: 0 1.2rem;
            }
        }

        .buttonSubmit {
            padding: 1.2rem 5rem;
            background: #34296B;
            color: #fff;
            text-transform: uppercase;
            font-weight: 700;
            font-family: "Proxima Nova Bold", sans-serif;
            font-size: 1rem;
            border: none;
            outline: none;
            border-radius: 50px;
        }
    }
`;