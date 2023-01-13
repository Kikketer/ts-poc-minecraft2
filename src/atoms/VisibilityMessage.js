import React from "react";
import "./VisibilityMessage.css";

const VisibilityMessage = ({ children, className }) => {
  return (
    <p className={`ts_visibilitymessage ${className}`}>
      <span role="img" aria-label="eye">
        👁️
      </span>
      {children}
    </p>
  );
};

export default VisibilityMessage;
