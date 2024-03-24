import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import PropTypes from "prop-types";

import "./Mountain.scss";

const Mountain = ({ imgLink, title, region, country, latitude, longitude }) => {
  return (
    <div className="Mountain">
      <div className="Mountain-picture-container">
        <img className="Mountain-picture" src={imgLink} alt="" />
      </div>
      <h2 className="Mountain-name">{title}</h2>
      <p className="Mountain-region">Region : {region}</p>
      <p className="Mountain-country">Country : {country}</p>
      <MapContainer
        center={[latitude, longitude]}
        zoom={2}
        style={{ height: "20em", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}></Marker>
      </MapContainer>
    </div>
  );
};

Mountain.propTypes = {
  imgLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Mountain;
