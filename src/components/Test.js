import PropTypes from "prop-types";

import React from "react";

const Test = ({ name }) => {
  return <div style={akash}>{name}</div>;
};

Test.prototype = {
  name: PropTypes.number.isRequired,
};

const akash = {
  color: "red",
  backgroundColor: "blue",
};
export default Test;
