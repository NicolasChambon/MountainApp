import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadMountainData } from "../../actions/actions";

import Header from "../Header/Header";
import Mountains from "../Mountains/Mountains";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMountainData());
  }, []);

  return (
    <div className="App">
      <Header />
      <Mountains />
    </div>
  );
}

export default App;
