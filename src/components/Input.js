import { useEffect, useState, useContext } from "react";

import classes from "./Input.module.css";
import ThemeContext from "../context/theme-context";

const Input = (props) => {
  const [currentInput, setCurrentInput] = useState("");
  const themeCtx = useContext(ThemeContext);

  const countryList = props.countryData;

  useEffect(() =>{
    if (props.filteredByRegion === true) setCurrentInput("")
  },[props.filteredByRegion])

  const nameToUppercase = (input) => {
    if (input.length === 0) return;
    const stringArray = input.split(" ");

    if (stringArray.length === 1) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    } else {
      const newInput = stringArray.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return newInput.join(" ");
    }
  };

  const listFilter = (input) => {
    const query = nameToUppercase(input);
    const newList = countryList.filter((item) => {
      return query === item.name.slice(0, query.length);
    });
    return newList;
  };

  const inputChangeHandler = (event) => {
    setCurrentInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (currentInput.trim().length === 0) {
      props.onSearch(false);
    } else {
      const newCountryList = listFilter(currentInput);
      props.onSearch(newCountryList);
    }
  };

  const inputClass = `${classes.inputContainer} ${
    themeCtx.currentTheme === "dark"
      ? " darkElement darkBoxShadow"
      : " lightElement lightBoxShadow"
  }`;
  // useEffect(() => {
  //     const timer = setTimeout(() => {

  //     }, 3000)
  //     return
  // }, [currentInput]);

  return (
    <form className={classes.inputForm} onSubmit={formSubmitHandler}>
      <div className={inputClass}>
        <i className="fas fa-search customIcon"></i>
        <input
          type="text"
          onChange={inputChangeHandler}
          placeholder="Search for a country..."
          value={currentInput}
        />
      </div>
    </form>
  );
};

export default Input;
