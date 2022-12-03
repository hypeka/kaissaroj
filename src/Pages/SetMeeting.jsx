import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import image from '../Assests/Images/id.jpg'

const SetMeeting = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [hours , setHours] = useState('')

  const halfday = [
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

  const timeCatcher = (get) => {
    setHours(get);
  }

  // const copyText = async () => {
  //   try{
  //     await navigator.clipboard.writeText(document.getElementById('copy').innerHTML);
  //     alert("Content copied to clipboard");
  //   }catch(err){
  //     alert('failed to copy:' ,err)
  //   }
  // }

  console.log(hours)
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="container">
            <div className="meeting-schedule-main">
              <div className="row">
                <div className="col-md-4">
                  <div className="left-meet">
                    <div className="left-meeting-head">
                      <img src={image} alt="" />
                      <h4>Saroj Ghalan</h4>
                      <h2>30 Min Meeting</h2>
                    </div>
                    <div className="left-meet-content">
                      <ul>
                        <li>
                          <p id="copy">
                            <span><i class="fa-solid fa-video"></i></span>Call video
                          </p>
                        </li>
                        <li>
                          <p>
                            <span><i class="fa-regular fa-clock"></i></span>30 Minutes
                          </p>
                        </li>
                        <li>
                          <p>
                            <span><i class="fa-solid fa-globe"></i></span>Asia/Kathmandu
                          </p>
                          {/* <button onClick={copyText}>Copy text</button> */}
                        </li>
                      </ul>
                    </div>
                    <div className="back-arrow">
                      <NavLink to='/'>
                      <p><i class="fa-solid fa-arrow-left"></i></p>
                      </NavLink>
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
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
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
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              24h
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <div
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="hours-display-main">
                              {halfday.map((get,keys) => {
                                return(
                                  <div className="hours-display" onClick={() =>timeCatcher(get)}>
                                    <p>{get}</p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="hours-display-main">
                              {fullday.map((get,keys) => {
                                return(
                                  <div className="hours-display" onClick={() =>timeCatcher(get)}>
                                    <p>{get}</p>
                                  </div>
                                )
                              })}
                            </div>
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
      </div>
    </>
  );
};

export default SetMeeting;
