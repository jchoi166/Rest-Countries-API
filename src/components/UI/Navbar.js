import { useContext } from "react";

import classes from "./Navbar.module.css";
import ThemeContext from "../../context/theme-context";

const Navbar = () => {
  const body = document.body;
  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx.setTheme();
    body.classList.toggle("darkBackground");
  };
  console.log(themeCtx.currentTheme);

  const navElementClass = `${classes.navbar} ${
    themeCtx.currentTheme === "dark"
      ? " darkElement darkBoxShadow"
      : " lightElement lightBoxShadow"
  }`;

  return (
    <div className={navElementClass}>
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div className={classes.darkTheme} onClick={toggleThemeHandler}>
        {themeCtx.currentTheme === "light" ? (
          <i className="far fa-moon"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}{" "}
        Dark Mode
      </div>
    </div>
  );
};

export default Navbar;
