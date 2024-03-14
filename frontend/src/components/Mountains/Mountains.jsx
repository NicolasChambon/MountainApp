import { useSelector } from "react-redux";

import Mountain from "../Mountain/Mountain";

import "./Mountains.scss";

const Mountains = () => {
  const mountains = useSelector((state) => state.mountains);
  return (
    <div className="Mountains">
      {mountains.map((mountain) => (
        <Mountain
          key={mountain.id}
          imgLink={mountain.picture}
          title={mountain.name}
          region={mountain.region.name}
          country={mountain.country.name}
          latitude={mountain.latitude}
          longitude={mountain.longitude}
        />
      ))}
    </div>
  );
};

export default Mountains;
