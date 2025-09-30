import styles from "./TimeSlots.module.css";

export default function TimeSlots({ date, onSelectTime }) {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
    }
    return slots;
  };

  return (
    <div className={styles.timeSlots}>
      <h2>Select a Time</h2>
      <div className={styles.slotGrid}>
        {generateTimeSlots().map((time) => (
          <button
            key={time}
            className={styles.timeSlot}
            onClick={() =>
              onSelectTime(new Date(date.setHours(parseInt(time))))
            }
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
