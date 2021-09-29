import { useContext, useState, useRef } from "react";
import { useRouteMatch } from "react-router-dom";

import classes from "./Dropdown.module.css";
import ThemeContext from "../../context/theme-context";

const Dropdown = (props) => {
  const themeCtx = useContext(ThemeContext);
  const selectMenuRef = useRef();
  const match = useRouteMatch();

  const [selectIsShown, setSelectIsShown] = useState(false);

  // const customSelect = `${classes.customSelect} ${
  //   themeCtx.currentTheme === "dark"
  //     ? " darkElement darkBoxShadow"
  //     : " lightElement lightBoxShadow"
  // }`;

  const darkThemeClass = (style) => {
    return `${classes[style]} ${
      themeCtx.currentTheme === "dark"
        ? " darkElement darkBoxShadow"
        : " lightElement lightBoxShadow"
    }`;
  };

  const toggleSelectMenuHandler = () => {
    !selectIsShown ? setSelectIsShown(true) : setSelectIsShown(false);
  };

  const selectOptionHandler = (event) => {
    if (event.target.tagName === "LI") {
      props.onSelectRegion(event.target.textContent)
    }
    toggleSelectMenuHandler();
  };

  // console.log(match.path);

  // Event handler attached to document so that user can click outside of menu to close it.
  document.addEventListener("click", function (event) {
    if (selectMenuRef.current === null) return;

    if (!selectMenuRef.current.contains(event.target)) {
      selectIsShown && setSelectIsShown(false);
    }
  });

  return (
    <div className={classes.selectContainer} ref={selectMenuRef}>
      <div
        className={darkThemeClass("selectButton")}
        onClick={toggleSelectMenuHandler}
      >
        <p>{props.currentOption}</p>
        <i className="fas fa-sort-down"></i>
      </div>
      {selectIsShown && (
        <ul
          className={darkThemeClass("selectOptions")}
          onClick={selectOptionHandler}
        >
          <li className={classes.item}>Africa</li>
          <li className={classes.item}>Americas</li>
          <li className={classes.item}>Asia</li>
          <li className={classes.item}>Europe</li>
          <li className={classes.item}>Oceana</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
