export const fetchAllCountriesHandler = async () => {
  const response = await fetch("https://restcountries.com/v2/all");

  if (!response.ok) throw new Error("Something went wrong!");

  const data = await response.json();
  const newData = await data.map((country) => {
    return {
      id: country.alpha3Code,
      name: country.name,
      region: country.region,
      pop: country.population,
      img: country.flag,
      captial: country.capital,
    };
  });
  // console.log(newData)
  return newData;
};

export const fetchOneCountryHandler = async (alpha) => {
  const response = await fetch(
    `https://restcountries.com/v2/alpha/${alpha}`
  );
  if (!response.ok) throw new Error("Something went wrong!");
  const data = await response.json();
  // console.log(data)
  return data; 
};
