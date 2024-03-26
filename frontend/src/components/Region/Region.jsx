import PropTypes from "prop-types";

import "./Region.scss";

const Region = ({ title }) => {
  return (
    <div className="Region">
      {/* <div className="Region-picture-container">
        <img className="Region-picture" src={imgLink} alt="" />
      </div> */}
      <h2 className="Region-name">{title}</h2>
    </div>
  );
};

Region.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Region;
