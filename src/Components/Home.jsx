import React from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <>
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
                  <div className="meeting-card" key={keys}>
                    <h4>{get.title}</h4>
                    <div className="time">
                        <ul>
                            <li>
                                <p>{get.time}</p>
                            </li>
                            <li>
                                <p>1-on-1</p>
                            </li>
                        </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
