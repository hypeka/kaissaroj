import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Calendar from "react-calendar";

const SetMeeting = () => {
  const [value , onChange] = useState(new Date());
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="left-meet">
                  <div className="left-meeting-head">
                    <img src="" alt="" />
                    <h4>Saroj Ghalan</h4>
                    <h2>30 Min Meeting</h2>
                  </div>
                  <div className="left-meet-content">
                    <ul>
                      <li>
                        <p><span></span>Call video</p>
                      </li>
                      <li>
                        <p><span></span>30 Minutes</p>
                      </li>
                      <li>
                        <p><span></span>Asia/Kathmandu</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="right-meet">
                  <Calendar onChange={onChange} value={value} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetMeeting;
