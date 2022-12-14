import React, {useContext} from "react";
import { MeetingContext } from "../Context/LocalStorage";
import { NavLink, useLocation } from "react-router-dom";

import ".././App.css";

const Home = () => {
  const arr = [
    {
      id: "3",
      title: "45 Min Meeting",
      time: "45m",
    },
    {
      id: "1",
      title: "30 Min Meeting",
      time: "30m",
    },
    {
      id: "2",
      title: "15 Min Meeting",
      time: "15m",
    },
  ];

  const { state } = useLocation();
  const meeting = state?.meetingArray;

  const [meetingArray , setMeetingArray] = useContext(MeetingContext);

  const removeHandler = (e,name) => {
    let temp = [...meetingArray]
    let tempData = temp.filter(item => item.name !== name);
    setMeetingArray(tempData);
  }

  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="container">
            <div className="topic">
              <h3>Saroj Ghalan</h3>
              <p>test</p>
            </div>
            <div className="meeting-main">
              {arr.map((get, keys) => {
                return (
                  <>
                    <NavLink
                      to="/set-meeting"
                      className="nav-link"
                      state={{ title: get.title }}
                    >
                      <div className="meeting-card" key={keys}>
                        <h4>{get.title}</h4>
                        <div className="time">
                          <ul>
                            <li>
                              <p>
                                <span>
                                  <i class="fa-regular fa-clock"></i>
                                </span>
                                {get.time}
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>
                                  <i class="fa-solid fa-user"></i>
                                </span>
                                1-on-1
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavLink>
                  </>
                );
              })}
            </div>
            {meetingArray?.length > 0 && <div className="meeting-list">
              <div className="topic">
                <h3>Created Meeting Schedule</h3>
              </div>
              <div className="row">
                {meetingArray.map((get, keys) => {
                  return (
                    <div className="col-md-3">
                      <div className="meeting-card">
                        <div className="topic">
                        <h3>{get.meetingTime}</h3>
                          <h4>Name : <span>{get.name}</span></h4>
                          <h4>Email : <span>{get.email}</span></h4>
                          <h4>Notes : <span>{get.notes.substring(0,12)}</span></h4>
                          <h4>Date : <span>{get.calender}</span></h4>
                          <h4>At Time : <span>{get.atTime}</span></h4>
                        </div>
                        <div className="button">
                          <button className="remove-button" onClick={(e) => removeHandler(e,get.name)}>Remove Schedule</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
