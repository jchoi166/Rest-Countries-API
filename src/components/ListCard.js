import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./ListCard.module.css";
import ThemeContext from "../context/theme-context";

const ListCard = (props) => {
  const themeCtx = useContext(ThemeContext);

  const country = props.country;

  const listCardClass = `${classes.listCard} ${
    themeCtx.currentTheme === "dark"
      ? " darkElement darkBoxShadow"
      : " lightElement lightBoxShadow"
  }`;

  const popFormatter = (number) => {

  }

  return (
    <Link className={classes.routeLink} to={`/countries/${country.id}`}>
      <div className={listCardClass} data-listcard={'List-Card'}>
        <img className={classes.image} src={country.img} />
        <div className={classes.description}>
          <h2>{country.name}</h2>
          <p>
            <span>Population: </span>
            {country.pop.toLocaleString()}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Captial: </span>
            {country.captial}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
