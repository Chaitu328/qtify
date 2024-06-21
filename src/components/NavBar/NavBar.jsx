import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";

const NavBar = () => {


  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div>
          <Logo id={styles.logo} />
        </div>
        <div className={styles.searchWrapper}>
          <SearchBar placeholder="Search an album of your choice" />
        </div>
        <div className={styles.nav_link}>
          Feedback
        </div>
      </nav>
      <FeedBackModal/>
    </div>
  );
};

export default NavBar;
