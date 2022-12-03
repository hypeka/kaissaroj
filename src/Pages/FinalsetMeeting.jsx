import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../Assests/Images/id.jpg";
import Swal from "sweetalert2";

const FinalsetMeeting = () => {
  const { state } = useLocation();
    const navigate = useNavigate();

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [notes , setNotes] = useState('');

  const [meetingArray , setMeetingArray] = useState([]);

  const SubmitHandler = () => {
    setMeetingArray([...meetingArray,{name:name,email:email,notes:notes}])
    navigate('/',{state:{meetingArray:[...meetingArray,{name:name,email:email,notes:notes}],calender:state.calendar.toLocaleDateString(),meetingTime:state.title,atTime:state.time}})
    Swal.fire({
        title: "Thank You ",
        text: "Your meeting schedule has been created",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
  }
  console.log(meetingArray);
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="final-meet">
                <div className="left-meet">
                  <div className="left-meeting-head">
                    <img src={image} alt="" />
                    <h4>Saroj Ghalan</h4>
                    <h2>{state.title}</h2>
                  </div>
                  <div className="left-meet-content">
                    <ul>
                      <li>
                        <p id="copy">
                          <span>
                            <i class="fa-solid fa-video"></i>
                          </span>
                          Call video
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>
                            <i class="fa-regular fa-clock"></i>
                          </span>
                          {state.title}
                        </p>
                      </li>
                      <li className="state-data">
                        <p>
                          <span>
                            <i class="fa-regular fa-clock"></i>
                          </span>
                          {state.calendar.toLocaleDateString()} , {state.time}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="final-meet">
                <div className="left-meet">
                  <div className="input-form">
                    <label htmlFor="">Your Name : </label>
                    <br />
                    <input type="text" placeholder="Mutant Sensei...." value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="input-form">
                    <label htmlFor="">Email Address : </label>
                    <br />
                    <input type="email" placeholder="mutant@gmail.com...." value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input-form">
                    <label htmlFor="">Additional Notes</label>
                    <br />
                    <textarea
                      placeholder="Please share anything that will help prepare for our meeting"
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="cancel-button">Cancel</button>
              <button className="submit-button" onClick={SubmitHandler}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalsetMeeting;
