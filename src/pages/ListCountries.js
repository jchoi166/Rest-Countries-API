import { useEffect, useState, useCallback } from "react";
import { fetchAllCountriesHandler } from "../components/lib/api";
import classes from "./ListCountries.module.css";

import SelectRegion from "../components/SelectRegion";
import Input from "../components/Input";
import ListCard from "../components/ListCard";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "../components/UI/NotFound";
import useHttp from "../components/hooks/use-http";

const ListCountries = () => {
  const [filteredContent, setFilteredContent] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false)
  const [isFilteredRegion, setIsFilteredRegion] = useState(false)

  const { data, error, status, sendRequest } = useHttp(
    fetchAllCountriesHandler,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content = []
  
  const filterCountryHandler = (countryList, filteredByRegion = false) => {
    if (countryList === false) {
      setIsFiltered(false)
      return
    }
    
    setIsFilteredRegion(filteredByRegion)
    setIsFiltered(true)
    setFilteredContent(countryList)
  };

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  
  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && !isFiltered) {
    console.log(data)
    content = data.map((country) => (
      <ListCard key={country.id} country={country} />
    ));
  }

  if (isFiltered) {
    content = filteredContent.map((country) => (
      <ListCard key={country.id} country={country} />
    ));
  }

  if (isFiltered && filteredContent.length === 0) {
    content = <NotFound/>
  }

  return (
    <div className={classes.countries + " container"}>
      <div className={classes.countryMenu}>
        <Input onSearch={filterCountryHandler} countryData={data} filteredByRegion={isFilteredRegion}/>
        <SelectRegion onSearch={filterCountryHandler} countryData={data} filteredByRegion={isFilteredRegion}/>
      </div>
      <div className={classes.countryList}>{content}</div>
    </div>
  );
};

export default ListCountries;
