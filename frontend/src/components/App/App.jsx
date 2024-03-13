import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMountains } from "../../actions/actions";

import Header from "../Header/Header";
import Mountains from "../Mountains/Mountains";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMountains());
  }, []);

  return (
    <div className="App">
      <Header />
      <Mountains />
    </div>
  );
}

export default App;
