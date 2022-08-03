import React from "react";
import css from "./style.module.css";

const HamburgerMenu = () => {
  return (
    <header>
      <div className={`${css.hamburgerIcon}${css.icon}`}>
        <div className={`${css.icon1} ${css.a}`}></div>
        <div className={`${css.icon2} ${css.b}`}></div>
        <div className={`${css.icon3} ${css.c}`}></div>
        <div className={css.clear}></div>
      </div>
      <nav className={css.nav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className={`$css.darkBlue} ${css.blue}`}></div>
      <section className={css.content}>
        <h1>Hello We are animated!</h1>
        <p className={css.small}>Lorem ipsum dolor sit amet</p>
      </section>
    </header>
  );
};

export default HamburgerMenu;
