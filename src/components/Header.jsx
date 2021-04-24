import React from 'react';

import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark pt-4">
            <div className="container">
                <a class="navbar-brand" href="https://perxels.com">
                    <img src={logo} alt="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="https://perxels.com">Home</a>
                        </li>
                        <li class="nav-item px-0 px-md-4">
                            <a class="nav-link" href="https://perxels.com">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://perxels.com">Speaker</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;

