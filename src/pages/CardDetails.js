import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import useHttp from "../components/hooks/use-http";
import { fetchOneCountryHandler } from "../components/lib/api";
import DetailCard from "../components/DetailCard";
import Button from "../components/UI/Button";
import classes from './CardDetails.module.css'
import LoadingSpinner from "../components/UI/LoadingSpinner";

const CardDetails = () => {

  const params = useParams();
  // console.log(params);

  const {data, status, error, sendRequest} = useHttp(fetchOneCountryHandler)

  useEffect(() => {
    sendRequest(params.countryID)
  }, [sendRequest, params])

  // console.log(data)

  let content

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

  if (status === 'completed') {
    content = <DetailCard countryData={data}/> 
  }
  
  return (
    <div className={classes.detailsContainer + ' container'}>
      <Link to='/countries'>
      <Button className={classes.detailsButton}>Back</Button>
      </Link>
      {content}
    </div>
  );
};

export default CardDetails;
