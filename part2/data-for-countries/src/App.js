import { useEffect, useState } from "react";
import { CountryDetails } from "./CountryDetails";
import CountryDetailsLink from "./CountryDetailsLink";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  };

  const handleShowCountryDetails = (name) => {
    fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountryList([data]));
  }

  useEffect(() => {
    if (searchString.length === 0) {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => response.json())
      .then((data) => setCountryList(data));
    }
  }, [searchString.length]);

  useEffect(() => {
    if (searchString.length) {
      const filteredCountries = countryList.filter((country) => country.name.common.toLowerCase().includes(searchString.toLowerCase()));
      setCountryList(filteredCountries);
    }
  }, [searchString]);

  useEffect(() => {
    if (countryList.length === 1) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countryList[0].latlng[0]}&lon=${countryList[0].latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [countryList]);

  return (
    <div className="App">
      <label htmlFor="search">Find Countries</label>
      <input htmlFor='search' type="text" onChange={handleSearch} />
      {(countryList.length > 10) ? (
        <p>Too many matches, specify another filter</p>
      ) : (countryList.length <= 10 && countryList.length > 1) ? (
        <CountryDetailsLink countryList={countryList} onClick={handleShowCountryDetails} />
      ) : countryList.length === 1 ? (
        <CountryDetails 
          name={countryList[0].name.common} 
          capital={countryList[0].capital[0]}
          area={countryList[0].area}
          languages={countryList[0].languages}
          flagImg={countryList[0].flags.png}
          weather={weather}
        />
      ) : (null)}
    </div>
  );
}

export default App;
