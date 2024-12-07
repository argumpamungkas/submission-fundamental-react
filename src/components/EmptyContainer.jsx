/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import imgNoData from "../assets/no_data.png";

function EmptyContainer({ nama }) {
  return (
    <div className="empty">
      <img src={imgNoData} alt="No Data" />
      <p>Tidak ada data {nama}</p>
    </div>
  );
}

export default EmptyContainer;
