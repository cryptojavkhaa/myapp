import React, { useContext, useState, useEffect } from "react";
import Media from "react-media";
import { useInView } from "react-intersection-observer";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ThemeContext from "./../../context/ThemeContext";
//import HamburgerMenu from "./../HamburgerMenu";
import css from "./style.module.css";

const Navbar = (props) => {
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
    <div>
      <Media
        queries={{
          small: "(max-width:899px)",
          large: "(min-width:900px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && <p>fdfadsdf</p>}
            {matches.large && (
              <nav
                ref={myRef}
                className={theme === "light" ? css.light : css.dark}
              >
                <ul>
                  <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <li>
                      <a href="/" className={css.wrap}>
                        <HomeIcon sx={{ marginRight: 1 }} />
                        {themeContext.t("Menu.1")}
                      </a>
                    </li>
                  </div>
                  <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <li>
                      <a href="tel:8665562570" className={css.wrap}>
                        <CallIcon sx={{ marginRight: 1 }} />
                        {themeContext.t("Menu.2")}
                      </a>
                    </li>
                  </div>
                  <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                    <li>
                      <a
                        href="mailto:broker@rentsoestate.mn?subject=your title&body=TThe message"
                        className={css.wrap}
                      >
                        <MailIcon sx={{ marginRight: 1 }} />
                        {themeContext.t("Menu.3")}
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default Navbar;
