import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

function CustomCalendar({ selectedDate, onSelectDateTime }) {
  const [date, setDate] = useState(selectedDate || new Date());

  // Generate time slots 8 AM – 5 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
    }
    return slots;
  };

  return (
    <div className={styles.calendar}>
      {/* Calendar itself */}
      <Calendar
        onChange={(value) => setDate(value)}
        value={date}
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 90))}
      />

      {/* Time slots for the selected day */}
      {date && (
        <div className={styles.timeSlots}>
          {generateTimeSlots().map((time) => {
            const [hour] = time.split(":");
            const slotDate = new Date(date);
            slotDate.setHours(parseInt(hour), 0, 0, 0);

            return (
              <button
                key={time}
                onClick={() => onSelectDateTime(slotDate)}
              >
                {time}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomCalendar;
