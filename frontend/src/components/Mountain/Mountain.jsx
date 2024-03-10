import PropTypes from "prop-types";

import "./Mountain.scss";

function Mountain({ imgLink, title }) {
  return (
    <div className="Mountain">
      <p>{title}</p>
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/${imgLink}`}
        alt=""
      />
    </div>
  );
}

Mountain.propTypes = {
  imgLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Mountain;
