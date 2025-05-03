import React, { useState, useEffect, useCallback } from "react";
import { words } from "./constants/words";
import { stages } from "./constants/stages";
import { letters } from "./constants/letters";
import AfisareButoane from "./components/AfisareButoane/AfisareButoane";
import AfisareLitere from "./components/AfisareLitere/AfisareLitere";
import Buton from "./components/Buton/Buton";

function App() {
  const [cuvantul, setCuvantul] = useState("");
  const [litereSelectate, setLitereSelectate] = useState([]);
  const [indexImg, setIndexImg] = useState(0);
  const [finisat, setFinisat] = useState(false);
  const [culoare, setCuloare] = useState("black");
  const [butonApasat, setButonApasat] = useState([]);
  const [textul, setTextul] = useState("");

  useEffect(() => {
    cuvantAleatoriu();
  }, []);

  const cuvantAleatoriu = useCallback(() => {
    const cuvant = words[Math.floor(Math.random() * words.length)];
    setCuvantul(cuvant);
    setLitereSelectate([]);
    setIndexImg(0);
    setTextul("");
    setFinisat(false);
    setCuloare("black");
    setButonApasat([]);
  }, []);

  function selecteazaLitere(litera, index) {
    if (finisat || butonApasat.includes(index)) return;

    setButonApasat((prev) => [...prev, index]);

    const noua_litera = [...litereSelectate, litera];
    setLitereSelectate(noua_litera);

    if (cuvantul.includes(litera)) {
      let toateGasite = true;
      cuvantul.split("").forEach((litera) => {
        if (!noua_litera.includes(litera)) {
          toateGasite = false;
        }
      });

      if (toateGasite) {
        setTextul("YOU WIN");
        setFinisat(true);
        setCuloare("green");
      }
    } else {
      if (indexImg + 1 >= stages.length - 1) {
        setTextul("YOU LOSE");
        setFinisat(true);
        setIndexImg(indexImg + 1);
        setCuloare("red");
        setLitereSelectate([...cuvantul]);
      } else {
        setIndexImg(indexImg + 1);
      }
    }
  }

  return (
    <>
      <div className="principal">
        <h1 className="titlu" style={{ color: culoare }}>
          {textul}
        </h1>
        <img src={stages[indexImg]} alt="hangman stage" />
        <AfisareLitere
          cuvantul={cuvantul}
          litereSelectate={litereSelectate}
          finisat={finisat}
        />
        <div>
          {!finisat ? (
            <AfisareButoane
              litere={letters}
              selecteazaLitere={selecteazaLitere}
              butoane={butonApasat}
            />
          ) : (
            <Buton cuvantAleatoriu={cuvantAleatoriu} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
