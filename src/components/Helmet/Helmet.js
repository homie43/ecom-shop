import React from "react";

const Helmet = ({ title, children }) => {
  document.title = `Multimarket - ${title}`;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
