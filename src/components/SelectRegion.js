import { useContext, useState, useEffect } from "react";

import classes from "./SelectRegion.module.css";
import ThemeContext from "../context/theme-context";
import Dropdown from "./UI/Dropdown";

const SelectRegion = (props) => {
  const themeCtx = useContext(ThemeContext);
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");
  

  // const customSelect = `${classes.customSelect} ${
  //   themeCtx.currentTheme === "dark"
  //     ? " darkElement darkBoxShadow"
  //     : " lightElement lightBoxShadow"
  // }`;

  useEffect(() => {
    if (props.filteredByRegion === false) {
      setSelectedRegion("Filter by region")
    }
    console.log('thisis running!')
  }, [props.filteredByRegion])


  const selectRegionHandler = (data) => {
    console.log(data)
    const newCountryList = props.countryData.filter(country => {
      return country.region === data
    })
    setSelectedRegion(data);

    props.onSearch(newCountryList, true)
  }

  

  return (
    <Dropdown onSelectRegion={selectRegionHandler} currentOption={selectedRegion}/>
  );
};

export default SelectRegion;
