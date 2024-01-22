import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import "./App.css";
import Card from "./Componentes/Card";
import Nav from "./Componentes/Nav";

function App() {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchGuests, setSearchGuests] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("stays.json"); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setStays(data);
        setFilteredStays(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = stays.filter((stay) => {
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
  }, [searchLocation, searchGuests, stays]);

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
