import React, { useState, useEffect } from "react";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import css from "./style.module.css";

const ScrollUpButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="top-to-btm">
      <KeyboardControlKeyIcon className="icon-position icon-style" />
    </div>
  );
};

export default ScrollUpButton;
