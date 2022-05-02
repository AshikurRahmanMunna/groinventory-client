import React from "react";
import { useParams } from "react-router-dom";

const InventoryItem = () => {
  const { id } = useParams();
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
        <div className="col-md-4">
            {/* <img src={} alt="" /> */}
        </div>
      <div>
        
      </div>
    </div>
  );
};

export default InventoryItem;
