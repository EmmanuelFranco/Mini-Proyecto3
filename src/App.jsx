import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import "./App.css";
import Card from "./Componentes/Card";
import Nav from "./Componentes/Nav";
import staysData from "./stays.json";


function App() {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchGuests, setSearchGuests] = useState("");

  useEffect(() => {
    setStays(staysData);
    setFilteredStays(staysData);
  }, []);

  useEffect(() => {
    const filtered = staysData.filter((stay) => {
      const locationMatch =
        searchLocation === "" ||
        `${stay.city}, ${stay.country}`
          .toLowerCase()
          .includes(searchLocation.toLowerCase());
      const guestsMatch =
        searchGuests === "" || stay.maxGuests >= Number(searchGuests);

      return locationMatch && guestsMatch;
    });

    setFilteredStays(filtered);
  }, [searchLocation, searchGuests]);

  return (
    <div className="App">
      <Nav
        onSearch={(location, guests) => {
          setSearchLocation(location);
          setSearchGuests(guests);
        }}
      />
      <div className="card-container">
        {filteredStays.map((stay, index) => (
          <div className="card-container-item" key={index}>
            <Card stay={stay} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;