import React, { useEffect } from "react";
import "./Hero.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropertyCard from "../property/PropertyCard";
import { properties } from "../property/properties";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#9a67ea",
      contrastText: "#fff",
    },
  },
});

function Hero() {
  const [location, setLocation] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [type, setType] = React.useState("");
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    setUserData(properties);
  }, [location, type]);

  const handleSearch = () => {
    // debugger;

    const newData = userData.filter(
      (x) => x.location.includes(location) && x.type.includes(type)
    );

    // .filter((y) =>
    //   Number(price) === 3000 ? Number(y.price) < 3000 : Number(y.price) > 3000
    // );
    // console.log("userDate", newData);
    setUserData(newData);
  };

  return (
    <>
      <div className="container">
        <form className="flex">
          <div className="box">
            <span>Location</span>

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="Location">Location</option>
              <option value="NewYork">New York</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className="box">
            <span>When</span>

            <select>
              <option id="0">Move-in Date</option>
            </select>
          </div>
          <div className="box">
            <span>Price</span>

            <select
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            >
              <option value="Price">Price</option>
              <option value="3000"> $1K-$3K </option>
              <option value="5000"> $3K-$5K </option>
            </select>
          </div>
          <div className="box">
            <span>Property Type</span>

            <select
              name="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Property Type">Property Type</option>
              <option value="Houses">Houses</option>
              <option value="Apartments">Apartments</option>
            </select>
          </div>
          <div className="button">
            <ThemeProvider theme={theme}>
              <Button
                color="neutral"
                variant="contained"
                onClick={() => handleSearch()}
              >
                Search
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
      {userData && userData.length > 0 ? (
        <PropertyCard propertiesss={userData} />
      ) : (
        <div className="error">
          <h1>Oops! No matching results found</h1>
        </div>
      )}
    </>
  );
}

export default Hero;
