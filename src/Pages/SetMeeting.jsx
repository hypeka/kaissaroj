import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SetMeeting = () => {
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const halhday = [
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
  ];
  const fullday = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
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
                        <p>
                          <span></span>Call video
                        </p>
                      </li>
                      <li>
                        <p>
                          <span></span>30 Minutes
                        </p>
                      </li>
                      <li>
                        <p>
                          <span></span>Asia/Kathmandu
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-meet">
                  {/* <Calendar onChange={onChange} value={value} /> */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    id="click"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="time-picker">
                  <ul>
                    <li>
                      <p>Sun,August 4</p>
                    </li>
                    <li>
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#12h"
                            type="button"
                            role="tab"
                            aria-controls="12h"
                            aria-selected="true"
                          >
                            12h
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#24h"
                            type="button"
                            role="tab"
                            aria-controls="24h"
                            aria-selected="false"
                          >
                            24h
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="12h"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          first one
                        </div>
                        <div
                          class="tab-pane fade"
                          id="24h"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          second one
                        </div>
                      </div>
                    </li>
                  </ul>
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
