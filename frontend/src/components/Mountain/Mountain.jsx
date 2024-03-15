import PropTypes from "prop-types";

import "./Mountain.scss";

const Mountain = ({ imgLink, title, region, country }) => {
  return (
    <div className="Mountain">
      <div className="Mountain-picture-container">
        <img
          className="Mountain-picture"
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/${imgLink}`}
          alt=""
        />
      </div>
      <h2 className="Mountain-name">{title}</h2>
      <p className="Mountain-region">Region : {region}</p>
      <p className="Mountain-country">Country : {country}</p>
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
