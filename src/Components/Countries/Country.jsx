import React, { useState } from "react";

const Country = ({ country, handleFlag }) => {
  const [visited, setVisited] = useState(false);
  const clickHandle = () => {
    setVisited(!visited);
  };
  return (
    <div className={`border ${visited ? "visit" : "not-visit"}`}>
      <img className="imgs" src={country.flags.png} alt="" />
      <h3>Name: {country.name.common}</h3>
      <p>Population : {country.population} </p>
      <h4>Capital: {country.capital}</h4>
      <button onClick={clickHandle}>
        {visited ? "Visited" : "Not visited"}
      </button>
      <button onClick={() => handleFlag(country.flags.png)}>Flags</button>
    </div>
  );
};

export default Country;
