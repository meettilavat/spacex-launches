import React from 'react';
import styles from './Footer.module.css';
import githubIcon from './38155303.png'; // Update this to the correct path of your Github icon

const Footer = () => (
    <footer className={styles.footer}>
        <p>Developed by Meet Tilavat</p>
        <a href="https://github.com/meettilavat/spacex-launches" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" />
        </a>
    </footer>
);

export default Footer;
