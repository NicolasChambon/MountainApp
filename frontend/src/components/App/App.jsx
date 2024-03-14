import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchMountains } from "../../actions/actions";

import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Mountains from "../Mountains/Mountains";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMountains());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/mountains" element={<Mountains />} />
      </Routes>
    </div>
  );
};

export default App;
