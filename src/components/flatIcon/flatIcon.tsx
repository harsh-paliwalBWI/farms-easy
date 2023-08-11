import React from "react";

const FlatIcon = ({ classname, icon }: any) => {
  return <i className={`w-fit flex items-center ${icon} ${classname}`}></i>;
};

export default FlatIcon;
