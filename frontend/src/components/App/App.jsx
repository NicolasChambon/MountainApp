import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchMountains } from "../../actions/mountainActions";
import { fetchRegions } from "../../actions/regionActions";
import { fetchCountries } from "../../actions/countryActions";

import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Mountains from "../Mountains/Mountains";
import AddMountain from "../AddMountain/AddMountain";
import Regions from "../Regions/Regions";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMountains());
    dispatch(fetchRegions());
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Mountains" element={<Mountains />} />
        <Route path="/Mountains/add" element={<AddMountain />} />
        <Route path="/Regions" element={<Regions />} />
      </Routes>
    </div>
  );
};

export default App;
