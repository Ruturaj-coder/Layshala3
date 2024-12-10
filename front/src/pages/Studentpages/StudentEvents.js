import React from "react";
import eventsData from "../../data/events.json";
import "../../css/Events.css"

const StudentEvents = () => {
  const { events } = eventsData;

  return (
    <div className="event-list" style={{fontFamily:"Noto Sans"}}>
      {events.map((event, index) => (
        <div key={index} className="event-block">
          <div className="date-block">
            <p>{event.date}</p>
            <span>{event.day}</span>
          </div>
          <div className="event-details">
            {event.details.map((detail, i) => (
              <div key={i} className="event-card">
                <div
                  className="color-indicator"
                  style={{ backgroundColor: detail.color }}
                ></div>
                <div className="event-info">
                  <h4>{detail.name}</h4>
                  <p>
                    {detail.organizer} &nbsp; | &nbsp; {detail.type} &nbsp; | &nbsp;{" "}
                    {detail.time} &nbsp; | &nbsp; {detail.venue} &nbsp; | &nbsp;
                    📞 {detail.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentEvents;
