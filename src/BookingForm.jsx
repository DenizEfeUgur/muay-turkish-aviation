import React from 'react'
import { useState } from "react";
import Navigation from './Navigation';

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

const apiUrl =
  "http://localhost:8080/engine-rest/process-definition/key/flightBookingId/start";
  
const BookingForm = () => {
  const [countryFrom, setCountryFrom] = useState("");
  const [countryTo, setCountryTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnFlight, setReturnFlight] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      variables: {
        fldFrom: { value: countryFrom, type: "String" },
        fldTo: { value: countryTo, type: "String" },
        fldDeparture: { value: departure, type: "String" },
        fldReturnFlight: {
          value: returnFlight,
          type: "String",
        },
        fldAdults: { value: adults, type: "Integer" },
        fldChildren: { value: children, type: "Integer" },
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("The Booking was successful");
      window.location.reload();
    } catch (error) {
      console.error("Booking failed:", error.message);
    }
  };

  return (
    <><Navigation /> 
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
      defaultValue="0"
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
  </form></>
    
  );
  
}

export default BookingForm