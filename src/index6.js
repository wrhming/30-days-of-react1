import React from "react";
import reactDom from "react-dom";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const Country = ({ country: { name, city } }) => (
  <div>
    <h1>{name}</h1>
    <small>{city}</small>
  </div>
);

const Countries = ({ countries }) => {
  const countriesList = countries.map((country) => (
    <Country key={country.name} country={country}></Country>
  ));
  return <div>{countriesList}</div>;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);
