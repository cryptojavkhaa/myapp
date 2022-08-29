import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollUpButton from "../ScrollUpButton";
import ThemeContext from "../../context/ThemeContext";
import Logo from "./../../assets/logo.png";
import css from "./style.module.css";

const Footer = (p) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");
  const { ref: myRef, inView: myRefIsVisible } = useInView();

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  return (
    <div ref={myRef} className={theme === "light" ? css.light : css.dark}>
      <div className={css.container}>
        <div className={css.menuItems}>
          <div className={css.logoContent}>
            <span className={`${myRefIsVisible ? css.fadeUp : ""}`}>
              <img src={Logo} alt="logo" className={css.logo} />
            </span>
            <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>
              {themeContext.t("CompanyName.1")}
            </h1>
            <p className={`${myRefIsVisible ? css.fadeUp : ""}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odio fugiat sequi illo id! Molestias eius porro asperiores
              dignissimos ab.
            </p>
          </div>
          <div className={css.menuItem}>
            <ul className={css.onlyMenu}>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="/">{themeContext.t("Menu.1")}</a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="/question">{themeContext.t("Menu.2")}</a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="/broker">{themeContext.t("Menu.3")}</a>
              </li>
            </ul>
            <div className={css.socialItems}>
              <div className={css.item}>
                <ul>
                  <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <h1>Get Social</h1>
                  </li>
                  <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <a href="https://facebook.com">
                      <Avatar
                        sx={{
                          bgcolor: "rgba(0,0,0,0)",
                          width: 50,
                          height: 50,
                          border: "#2375cc",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                      >
                        <FacebookIcon
                          fontSize="large"
                          sx={{ color: "#2375cc" }}
                        />
                      </Avatar>
                    </a>
                  </li>
                  <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <a href="https://youtube.com">
                      <Avatar
                        sx={{
                          bgcolor: "rgba(0,0,0,0)",
                          width: 50,
                          height: 50,
                          border: "#2375cc",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                      >
                        <YoutubeIcon
                          fontSize="large"
                          sx={{ color: "#2375cc" }}
                        />
                      </Avatar>
                    </a>
                  </li>
                  <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <a href="https://twitter.com">
                      <Avatar
                        sx={{
                          bgcolor: "rgba(0,0,0,0)",
                          width: 50,
                          height: 50,
                          border: "#2375cc",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        }}
                      >
                        <TwitterIcon
                          fontSize="large"
                          sx={{ color: "#2375cc" }}
                        />
                      </Avatar>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.copylight}>
        <div className={css.scrollItems}>
          <a href="#" className={`${myRefIsVisible ? css.fadeUp : ""}`}>
            <ScrollUpButton />
          </a>
          <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>TOP</h1>
        </div>
        <div className={css.line} />
        <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          {themeContext.t("Copyright.p")}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
