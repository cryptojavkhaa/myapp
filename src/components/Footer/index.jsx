import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
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
          <div className={css.menuItem}>
            <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>
              {themeContext.t("ShowCaseText.h2")}
            </h1>
            <ul>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="#">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p1")}
                  </span>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="https://rentsoestate.mn">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p2")}
                  </span>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="https://mongoloju.mn">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p3")}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.wrap}>
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
                      <GoogleIcon fontSize="large" sx={{ color: "#2375cc" }} />
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
                      <TwitterIcon fontSize="large" sx={{ color: "#2375cc" }} />
                    </Avatar>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.menuItem2}>
            <ul>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="#">{themeContext.t("Footer.Menu2.1")}</a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="#">{themeContext.t("Footer.Menu2.2")}</a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                <a href="/contact">{themeContext.t("Footer.Menu2.3")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.logoContent}>
          <span className={`${myRefIsVisible ? css.fadeUp : ""}`}>
            <img src={Logo} alt="logo" className={css.logo} />
          </span>
          <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>
            {themeContext.t("CompanyName.1")}
          </h1>
          <p className={`${myRefIsVisible ? css.fadeUp : ""}`}>
            {themeContext.t("Address.1")}
          </p>
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
