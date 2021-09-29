import { Link } from 'react-router-dom'
import classes from './DetailCard.module.css'

import Button from '../components/UI/Button'

const DetailCard = (props) => {
    const country = props.countryData

    return (
        <div className={classes.cardContainer}>
            {/* <button className={classes.backButton}>Back Button</button> */}
            <div className={classes.detailCard}>
                <img className={classes.image} src={country.flag} alt="This is where the image goes!"/>
                <div className={classes.description}>
                    <h1 className={classes.header}>{country.name}</h1>
                    <div className={classes.column}>
                        <p><span>Native Name: </span>{country.nativeName}</p> 
                        <p><span>Population: </span>{country.population.toLocaleString()}</p>
                        <p><span>Region: </span>{country.region}</p>
                        <p><span>Subregion: </span>{country.subregion}</p>
                        <p><span>Captial: </span>{country.capital}</p>
                    </div>
                    <div className={classes.column}>
                        <p><span>Top Level Domain: </span>{country.topLevelDomain[0]}</p>
                        <p><span>Currencies: </span>{country.currencies[0].name}</p>
                        <p><span>Languages: </span>{country.languages[0].name}</p>
                    </div>
                    <div className={classes.border}>
                        Border Countries: {
                            country.borders.map(country => <Link to={`/countries/${country}`}><Button>{country} </Button></Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard