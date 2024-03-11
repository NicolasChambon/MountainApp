import { useSelector } from "react-redux";

import Mountain from "../Mountain/Mountain";

import "./Mountains.scss";

function Mountains() {
  const mountains = useSelector((state) => state.mountainData);
  return (
    <div className="Mountains">
      {mountains.map((mountain) => (
        <Mountain
          imgLink={mountain.picture}
          title={mountain.name}
          key={mountain.id}
        />
      ))}
    </div>
  );
}

export default Mountains;
