import React from "react";
import { useLocation } from "react-router-dom";

const FinalsetMeeting = () => {
  const { state } = useLocation();

  console.log("state data are", state);
  return <div className="home">
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="final-meet"></div>
                </div>
                <div className="col-md-6">
                    <div className="final-meet"></div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default FinalsetMeeting;
