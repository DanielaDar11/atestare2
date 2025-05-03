import React from "react";
import styles from "./AfisareLitere.module.css";
import AfisareCuvant from "../AfisareCuvant/AfisareCuvant";

function AfisareLitere({ cuvantul, litereSelectate, finisat }) {
  return (
    <>
      <div className={styles.undiv}>
        {!finisat ? (
          <AfisareCuvant
            cuvantul={cuvantul}
            litereSelectate={litereSelectate}
          />
        ) : (
          <p className={styles.mesaj}>
            <strong>{cuvantul}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default AfisareLitere;
