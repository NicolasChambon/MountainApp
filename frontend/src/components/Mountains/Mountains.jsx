import { useSelector } from "react-redux";

import Mountain from "../Mountain/Mountain";

import "./Mountains.scss";

function Mountains() {
  const mountains = useSelector((state) => state.mountainData);
  return (
    <div className="Mountains">
      {mountains.map((mountain) => (
        <Mountain
          key={mountain.id}
          imgLink={mountain.picture}
          title={mountain.name}
          region={mountain.region.name}
          country={mountain.country.name}
        />
      ))}
    </div>
  );
}

export default Mountains;
