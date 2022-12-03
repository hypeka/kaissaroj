import React from "react";
import { NavLink , useLocation} from "react-router-dom";

import ".././App.css";

const Home = () => {
  const arr = [
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

  const {state} = useLocation();
  console.log("state data are ",state)

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
                    <NavLink to="/set-meeting" className="nav-link" state={{title:get.title}}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
