import React from "react";
import styles from "./AfisareButoane.module.css";

function AfisareButoane({ litere, selecteazaLitere, butoane }) {
  return (
    <div className={styles.container}>
      {litere.map((litera, index) => (
        <button
          key={index}
          onClick={() => selecteazaLitere(litera, index)}
          disabled={butoane.includes(index)}
          className={styles.buton}
        >
          {litera}
        </button>
      ))}
    </div>
  );
}

export default AfisareButoane;
