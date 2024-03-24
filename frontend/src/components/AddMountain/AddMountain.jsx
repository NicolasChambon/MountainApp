import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaMountain } from "react-icons/fa6";

import "./AddMountain.scss";

import { EditMap } from "../EditMap/EditMap";

import { addMountain } from "../../actions/mountainActions";

const AddMountain = () => {
  const regions = useSelector((state) => state.region.regions);
  const countries = useSelector((state) => state.country.countries);
  const coordinates = useSelector(
    (state) => state.mountain?.clickedCoordinates
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <form
      className="AddMountain"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMountain(
            {
              name: e.target.name.value,
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              altitude: e.target.altitude.value,
              regionId: e.target.region.value,
              countryId: e.target.country.value,
              picture: e.target.picture.value,
            },
            navigate
          )
        );
      }}
    >
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
      <select
        className="AddMountain-input"
        name="region"
        id="region"
        defaultValue=""
      >
        <option value="" disabled>
          Regions
        </option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
      <select
        className="AddMountain-input"
        name="country"
        id="country"
        defaultValue=""
      >
        <option value="" disabled>
          Countries
        </option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <EditMap />
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
