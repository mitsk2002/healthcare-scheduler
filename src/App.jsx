import { useState } from "react";
import ProviderSelector from "./components/ProviderSelector";
import CustomCalendar from "./components/Calendar";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import styles from "./App.module.css";

export default function App() {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null); // Date object
  const [booking, setBooking] = useState(null);

  const handleBook = (formData) => {
    setBooking({
      ...formData,
      provider: selectedProvider,
      dateTime: selectedDateTime,
      date: selectedDateTime.toLocaleDateString(),
      time: selectedDateTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  const reset = () => {
    setBooking(null);
    setSelectedDateTime(null);
    setSelectedProvider(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.title}>Healthcare Scheduler</h1>

        {/* Step 1: Provider Selection */}
        {!selectedProvider && <ProviderSelector onSelectProvider={setSelectedProvider} />}

        {/* Step 2: Calendar / Time Slots */}
        {selectedProvider && !selectedDateTime && (
          <CustomCalendar onSelectDateTime={setSelectedDateTime} />
        )}

        {/* Step 3: Booking Form */}
        {selectedProvider && selectedDateTime && !booking && (
          <BookingForm onBook={handleBook} />
        )}

        {/* Step 4: Confirmation (Policy + Payment + Confirm) */}
        {booking && (
          <Confirmation
            appointment={booking}
            onConfirm={reset}
            onCancel={reset}
          />
        )}
      </div>
    </div>
  );
}
