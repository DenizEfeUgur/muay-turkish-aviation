/** @format */
import "./App.css";
import axios from "axios";
import { useState } from "react";

const destinations = [
  "Amsterdam",
  "Atlanta",
  "Bangkok",
  "Barcelona",
  "Beijing",
  "Boston",
  "Buenos Aires",
  "Cape Town",
  "Cairo",
  "Chicago",
  "Dallas",
  "Denver",
  "Dublin",
  "Dubai",
  "Frankfurt",
  "Hong Kong",
  "Houston",
  "Istanbul",
  "Johannesburg",
  "Las Vegas",
  "Lisbon",
  "London",
  "Los Angeles",
  "Madrid",
  "Miami",
  "Montreal",
  "Moscow",
  "Mumbai",
  "Mexico City",
  "New York",
  "Oslo",
  "Paris",
  "Rio de Janeiro",
  "Rome",
  "San Francisco",
  "São Paulo",
  "Seattle",
  "Seoul",
  "Shanghai",
  "Singapore",
  "Stockholm",
  "Sydney",
  "Tel Aviv",
  "Tokyo",
  "Toronto",
  "Vancouver",
  "Vienna",
  "Washington, D.C.",
  "Zurich",
];

function App() {
  const [countryFrom, setCountryFrom] = useState("");
  const [countryTo, setCountryTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnFlight, setReturnFlight] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const apiUrl = "http://localhost:8080/engine-rest/external-task";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      variables: {
        fldFrom: { value: countryFrom, type: "String" },
        fldTo: { value: countryTo, type: "String" },
        fldDeparture: { value: departure, type: "Date" },
        fldReturnFlight: { value: returnFlight, type: "Date" },
        fldAdults: { value: adults, type: "Integer" },
        fldChildren: { value: children, type: "Integer" },
      },
    };

    try {
      const response = await axios.post(apiUrl, formData);
      console.log("Booking successful:", response.data);
      // Handle success (e.g., display a success message or redirect)
    } catch (error) {
      console.error("Booking failed:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>From</h1>
      <select
        onChange={(e) => setCountryFrom(e.target.value)}
        name="from"
        required
      >
        <option disabled selected value="">
          Select country
        </option>
        {destinations.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>

      <h1>To</h1>
      <select onChange={(e) => setCountryTo(e.target.value)} name="to" required>
        <option disabled selected value="">
          Select country
        </option>
        {destinations.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>

      <h1>Departure</h1>
      <input
        onChange={(e) => setDeparture(e.target.value)}
        type="date"
        required
      />

      <h1>Return flight</h1>
      <input onChange={(e) => setReturnFlight(e.target.value)} type="date" />

      <h1>Travellers</h1>
      <p>Adults</p>
      <input
        onChange={(e) => setAdults(parseInt(e.target.value))}
        type="number"
        name="adults"
        min="1"
        defaultValue="1"
        required
      />
      <p>Children</p>
      <input
        onChange={(e) => setChildren(parseInt(e.target.value))}
        type="number"
        name="children"
        min="0"
        defaultValue="0"
      />

      <button type="submit">Book flights</button>
    </form>
  );
}

export default App;
