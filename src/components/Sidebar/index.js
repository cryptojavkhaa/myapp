import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "./../../context/ThemeContext";
import Logo from "./../../assets/logo.png";
import css from "./style.module.css";

const SideBar = (props) => {
  const themeContext = useContext(ThemeContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(themeContext.active);
  }, [themeContext.active]);

  return (
    <header>
      <nav className={active ? `${css.SideBar}${" "}${css.show}` : css.Sidebar}>
        <ul className={!active && css.hideList}>
          <li>
            <a href="/">{themeContext.t("Menu.1")}</a>
          </li>
          <li>
            <a href="/question">{themeContext.t("Menu.2")}</a>
          </li>
          <li>
            <a href="/broker">{themeContext.t("Menu.3")}</a>
          </li>
        </ul>
      </nav>
      <div
        className={active ? `${css.darkBlue}${" "}${css.slide}` : css.darkBlue}
      ></div>
    </header>
  );
};

export default SideBar;
