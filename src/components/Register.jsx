import React from 'react';
import Styled from 'styled-components';

const Register = () => {
    return (
        <RegisterContainer>
            <div className="container">
                <RegisterStyle id="register">
                    <h1 className="text-center">REGISTER HERE</h1>

                    <form>
                        <div className="inputGroup">
                            <label>Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="inputGroup">
                            <label>Email</label>
                            <input type="email" required/>
                        </div>
                        <div className="inputGroup">
                            <label>Profession</label>
                            <input type="text" required/>
                        </div>
                        <div className="inputGroup">
                            <label>Location</label>
                            <input type="text" required/>
                        </div>
                        <div className="text-center">
                            <button type="submit">Register</button>
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

        button {
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