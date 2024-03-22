import { useSelector } from "react-redux";
import { FaMountain } from "react-icons/fa6";

import "./AddMountain.scss";

const AddMountain = () => {
  const regions = useSelector((state) => state.region.regions);
  const countries = useSelector((state) => state.country.countries);

  return (
    <form className="AddMountain">
      <h2 className="AddMountain-title">
        Add a mountain <FaMountain className="add-logo" />
      </h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Mountain name - ex. Mount Everest"
        className="AddMountain-input"
        required
      />
      <select className="AddMountain-input" name="region" id="region">
        <option value="" disabled selected>
          Regions
        </option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
      <select className="AddMountain-input" name="country" id="country">
        <option value="" disabled selected>
          Countries
        </option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        id="latitude"
        name="latitude"
        placeholder="Latitude"
        className="AddMountain-input"
        required
      />
      <input
        type="number"
        id="longitude"
        name="longitude"
        placeholder="Longitude"
        className="AddMountain-input"
        required
      />
      <input
        type="number"
        id="altitude"
        name="altitude"
        placeholder="Altitude (m)"
        className="AddMountain-input"
        required
      />
      <input
        type="text"
        id="picture"
        name="picture"
        placeholder="Picture URL"
        className="AddMountain-input url"
        required
      />
      <button type="submit" className="AddMountain-button">
        Add
      </button>
    </form>
  );
};

export default AddMountain;
