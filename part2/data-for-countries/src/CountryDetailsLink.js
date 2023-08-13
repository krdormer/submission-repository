import { Fragment } from "react";

export default function CountryDetailsLink({ countryList, onClick }) {
  return (
    <ul>
      {countryList.map((country) => (
        <Fragment key={country.name.common}>
          <li>{country.name.common}</li>
          <button onClick={() => onClick(country.name.common)}>Show</button>
        </Fragment>
      ))}
    </ul>
  );
}
