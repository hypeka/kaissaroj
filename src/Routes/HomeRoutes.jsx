import React from "react";
import Home from "../Components/Home";
import { Routes, Route } from "react-router-dom";
import SetMeeting from "../Pages/SetMeeting";

const HomeRoutes = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path='/set-meeting' element={ <SetMeeting />} />
        </Routes>
    </>
  );
};

export default HomeRoutes;
