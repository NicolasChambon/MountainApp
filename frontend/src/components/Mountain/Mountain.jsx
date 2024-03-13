import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

import MapPin from "../MapPin/MapPin";

import "./Mountain.scss";

function Mountain({ imgLink, title, region, country }) {
  return (
    <div className="Mountain">
      <div className="Mountain-picture-container">
        <img
          className="Mountain-picture"
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/${imgLink}`}
          alt=""
        />
      </div>
      <p className="Mountain-name">{title}</p>
      <p className="Mountain-region">Region : {region}</p>
      <p className="Mountain-country">Country : {country}</p>
      <div
        className="Mountain-google-map-container"
        style={{ height: "15rem" }}
      >
        <GoogleMapReact
          className="Mountain-google-map-container-map"
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 45.8325,
            lng: 6.8651,
          }}
          defaultZoom={11}
        >
          <MapPin lat={45.8325} lng={6.8651} text="Mon Blanc" />
        </GoogleMapReact>
      </div>
    </div>
  );
}

Mountain.propTypes = {
  imgLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Mountain;
