import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiMountains } from "react-icons/gi";

import Region from "../Region/Region";

import "./Regions.scss";

const Regions = () => {
  const regions = useSelector((state) => state.region.regions);
  return (
    <div className="Regions">
      <Link className="Regions-add-link" to="add">
        Add a region <GiMountains className="add-logo" />
      </Link>
      <div className="Regions-list">
        {regions.map((region) => (
          <Region
            key={region.id}
            // imgLink={region.picture}
            title={region.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Regions;
