import PropTypes from "prop-types";

import "./Mountain.scss";

function Mountain({ imgLink, title }) {
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
    </div>
  );
}

Mountain.propTypes = {
  imgLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Mountain;
