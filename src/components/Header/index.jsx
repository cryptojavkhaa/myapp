import React, { useState, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo from "./../../assets/logo.png";
import css from "./style.module.css";
import ThemeContext from "./../../context/ThemeContext";

const Header = (props) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("mn");
  const themeContext = useContext(ThemeContext);
  const { ref: myRef, inView: myRefIsVisible } = useInView();

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  const handleLanguage = () => {
    setLang(!lang);
    lang
      ? themeContext.handleLanguage("en")
      : themeContext.handleLanguage("mn");
  };

  return (
    <nav ref={myRef} className={theme === "light" ? css.light : css.dark}>
      <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
        <h1 className={css.logoContent}>
          <img src={Logo} alt="logo" className={css.logo} />
          <span>{themeContext.t("CompanyName.2")}</span>
          {themeContext.t("CompanyName.3")}
        </h1>
      </div>
      <ul>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="#" className={css.wrap} onClick={handleLanguage}>
              {lang ? "English" : "Монгол"}
            </a>
          </li>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="#" className={css.wrap} onClick={themeContext.toggleTheme}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
