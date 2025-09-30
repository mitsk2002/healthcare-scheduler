import React, { useState } from "react";
import styles from "./Confirmation.module.css";

const Confirmation = ({ appointment, onConfirm, onCancel }) => {
  if (!appointment) return null;

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  return (
    <div className={styles.confirmationContainer}>
      <h2>Confirm Appointment</h2>

      <div className={styles.detailsBox}>
        <p><strong>Provider:</strong> {appointment.provider}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
      </div>

      {/* Cancellation / No-Show Policy */}
      <div className={styles.policyBox}>
        <strong>NO-SHOW / CANCELLATION POLICY</strong>
        <p>
          This clinic has a strict no-show/cancellation policy. Cancellations or
          rescheduling must be made at least 24 hours before your appointment time.
        </p>
        <p>
          Payment info is required to book. We will charge you a fee of{" "}
          <strong>$50</strong> if you no-show or cancel with less than 24 hours notice.
        </p>
        <p>By entering your payment info, you agree to this policy.</p>
      </div>

      {/* Mock Payment Info Form */}
      <div className={styles.paymentBox}>
        <h3>Enter Payment Info</h3>
        <input
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number (#### #### #### ####)"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
        />
        <div className={styles.row}>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            maxLength={5}
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={4}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button
          className={styles.confirmBtn}
          onClick={() => {
            if (!cardNumber || !expiry || !cvv || !name) {
              alert("Please enter all payment details before confirming.");
              return;
            }
            onConfirm();
          }}
        >
          Confirm Booking
        </button>
        <button
          className={styles.cancelBtn}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
