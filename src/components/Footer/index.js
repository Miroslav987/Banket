import React from 'react';
import './style.scss';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer className='footer'>
            <Logo/>
            <ul className='links'>
                <li>ссылки наших партнёров </li>
                <li>ссылки наших партнёров  </li>
                <li>©2023 Junior.dev   Все права защищены  </li>
            </ul>
        </footer>
    );
};

export default Footer;