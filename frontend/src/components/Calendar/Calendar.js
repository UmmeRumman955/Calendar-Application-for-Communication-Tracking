import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { fetchCalendarData } from "../../services/api";

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const loadCalendarData = async () => {
      try {
        const data = await fetchCalendarData();
        setEvents(data); // Data should be an array of events with dates
      } catch (error) {
        console.error("Failed to load calendar data:", error);
      }
    };

    loadCalendarData();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const eventsOnDate = events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    alert(`Events on ${date.toDateString()}: ${JSON.stringify(eventsOnDate)}`);
  };

  return (
    <div>
      <h2>Communication Calendar</h2>
      <Calendar onClickDay={handleDateClick} />
    </div>
  );
};

export default CalendarView;
