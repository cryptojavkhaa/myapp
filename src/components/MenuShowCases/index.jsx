import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThemeContext from "./../../context/ThemeContext";
//import Media from "react-media";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const MenuShowCases = (props) => {
  const themeContext = useContext(ThemeContext);
  const { ref: myRef, inView: myRefIsVisible } = useInView();
  return (
    <>
      <div ref={myRef} className={css.container}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.about}>
            <Link className={css.link} to="/about">
              <div className={css.Showcase}>
                <h1>
                  {themeContext.t("MenuShowCases.about.h2")}
                  <ArrowForwardIosIcon />
                </h1>
                <p>{themeContext.t("MenuShowCases.about.p")}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.sell}>
            <Link className={css.link} to="/sell">
              <div className={css.Showcase}>
                <h1>
                  {themeContext.t("MenuShowCases.sell.h2")}
                  <ArrowForwardIosIcon />
                </h1>
                <p>{themeContext.t("MenuShowCases.sell.p")}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.buy}>
            <Link className={css.link} to="/buy">
              <div className={css.Showcase}>
                <h1>
                  {themeContext.t("MenuShowCases.buy.h2")}
                  <ArrowForwardIosIcon />
                </h1>
                <p>{themeContext.t("MenuShowCases.buy.p")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div ref={myRef} className={css.container}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.sale}>
            <Link className={css.link} to="/sale">
              <div className={css.Showcase}>
                <h1>
                  {themeContext.t("MenuShowCases.sale.h2")}
                  <ArrowForwardIosIcon />
                </h1>
                <p>{themeContext.t("MenuShowCases.sale.p")}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.management}>
            <Link className={css.link} to="/management">
              <div className={css.Showcase}>
                <h1>
                  {themeContext.t("MenuShowCases.management.h2")}
                  <ArrowForwardIosIcon />
                </h1>
                <p>{themeContext.t("MenuShowCases.management.p")}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuShowCases;
