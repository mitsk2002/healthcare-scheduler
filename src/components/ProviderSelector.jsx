import React from "react";
import styles from "./ProviderSelector.module.css";

const providers = [
  "Chiropractor",
  "Acupuncturist",
  "Massage Therapist",
  "Physical Therapist",
  "Dietician",
  "Physical Therapist Assistant",
  "Naturopath",
];

const ProviderSelector = ({ onSelectProvider }) => {
  return (
    <div className={styles.selectorContainer}>
      <h2>Select a Provider</h2>
      <div className={styles.buttons}>
        {providers.map((provider) => (
          <button
            key={provider}
            onClick={() => onSelectProvider(provider)}
          >
            {provider}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProviderSelector;
