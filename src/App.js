import "./App.css";
import Navbar from "./components/header/Navbar";
import Banner from "./components/banner/Banner";

import PropertyCard from "./components/property/PropertyCard";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Hero />
      {/* <PropertyCard /> */}
    </div>
  );
}

export default App;
