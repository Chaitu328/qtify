import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo"
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import styles from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
                <Logo />
            <SearchBar placeholder="Search a song of your choice" />
            <Button text="Give Feedback" />
        </nav>
    );
};

export default Navbar;
