import React from "react";

function AfisareCuvant({ cuvantul, litereSelectate }) {
  return (
    <>
      {cuvantul
        .split("")
        .map((litera) => (litereSelectate.includes(litera) ? litera : "_"))
        .join(" ")}
    </>
  );
}

export default AfisareCuvant;
