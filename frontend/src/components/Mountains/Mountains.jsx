import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMountain } from "react-icons/fa6";

import Mountain from "../Mountain/Mountain";

import "./Mountains.scss";

const Mountains = () => {
  const mountains = useSelector((state) => state.mountains);
  return (
    <div className="Mountains">
      <Link className="Mountains-add-link" to="add">
        Add a mountain <FaMountain className="add-logo" />
      </Link>
      <div className="Mountains-list">
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
    </div>
  );
};

export default Mountains;
