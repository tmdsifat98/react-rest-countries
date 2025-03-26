import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ fetchData }) => {
  const countries = use(fetchData);
  const [flag, setFlag] = useState([]);
  const handleFlag = (newFlags) => {
    const newVisitedFlag = [...flag, newFlags];
    setFlag(newVisitedFlag);
  };
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
        <h2>visit:{flag.length}</h2>
      <div className="art">
        {countries.map((country) => (
          <Country
            handleFlag={handleFlag}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
