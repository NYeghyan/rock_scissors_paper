import "./App.css";
import { useState } from "react";

const choices = ["rock", "paper", "scissors"];

function App() {
  const [userchoice, setUserChoice] = useState();
  const [appchoice, setAppChoise] = useState();
  const [winstateuser, setWinStateUser] = useState(0);
  const [winstateapp, setWinStateApp] = useState(0);
  const [drowestate, setDroweState] = useState(0);

  const wins = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  const handleUserChoice = (e) => {
    const generatedChoice = choices[Math.floor(Math.random() * choices.length)];
    setAppChoise((prev) => generatedChoice);
    setUserChoice((prev) => e.target.value);
    console.log(generatedChoice);
    winResult(generatedChoice, e.target.value);
  };

  function winResult(appchoice, userchoice) {
    for (const results in wins) {
      if (results === userchoice && wins[results] === appchoice) {
        setWinStateUser((prev) => prev + 1);
      }
      if (results === appchoice && wins[results] === userchoice) {
        setWinStateApp((prev) => prev + 1);
      }
    }
    choices.forEach((element) => {
      if (element === userchoice && element === appchoice) {
        setDroweState((prev) => prev + 1);
      }
    });
  }
  return (
    <>
      <idv className="my-game">
        <h1> WELCOME TO `ROCK PAPER SCISSORS`</h1>
        <div className="player-choice">
          {choices.map((el) => (
            <button
              key={el}
              value={el}
              onClick={handleUserChoice}
              className="game-selection"
              style={{ backgroundImage: `url(./img/${el}.svg)` }}
            ></button>
          ))}
        </div>
        <div className="app-choice">
          {userchoice && (
            <>
              <div className="you-piked">
                <h4>YOU PICKED</h4>
                <button
                  key={userchoice}
                  className="game-selection"
                  style={{ backgroundImage: `url(./img/${userchoice}.svg)` }}
                ></button>
              </div>
              <div className="results">
                <p> You Win:  {winstateuser}</p>
                <p> Win Lose:  {winstateapp}</p>
                <p> Drow: {drowestate}</p>
              </div>
              <div>
                <h4>THE HOUSE PICKED </h4>
                <button
                  className="game-selection"
                  style={{ backgroundImage: `url(./img/${appchoice}.svg)` }}
                ></button>
              </div>
            </>
          )}
        </div>
      </idv>
    </>
  );
}

export default App;
