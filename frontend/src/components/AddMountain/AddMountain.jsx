import { FaMountain } from "react-icons/fa6";

import "./AddMountain.scss";

const AddMountain = () => {
  return (
    <form className="AddMountain">
      <h2 className="AddMountain-title">
        Add a mountain <FaMountain className="add-logo" />
      </h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Mountain name"
        className="AddMountain-input"
        required
      />
      <input
        type="text"
        id="region"
        name="region"
        placeholder="Region"
        className="AddMountain-input"
        required
      />
      <input
        type="text"
        id="country"
        name="country"
        placeholder="Country"
        className="AddMountain-input"
        required
      />
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
