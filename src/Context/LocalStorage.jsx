import React,{createContext, useState,useEffect} from 'react';

export const MeetingContext = createContext();

export const MeetingProvider = (props) => {

    const [meetingArray , setMeetingArray] = useState([]) 

    
    useEffect(() => {
        if(meetingArray.length > 0){localStorage.setItem("meetingArray",JSON.stringify(meetingArray))};
    },[meetingArray])
    
    useEffect(() => {
        if(localStorage.getItem("meetingArray")){
            setMeetingArray(JSON.parse(localStorage.getItem("meetingArray")));
        }
    },[])
    return(
        <MeetingContext.Provider value={[meetingArray , setMeetingArray]}>
            {props.children}
        </MeetingContext.Provider>
    )
}