import { type ChangeEvent, Fragment, useState } from "react";

// Generates options from -5 to 10
const generateSelectOptions = Array.from({ length: 16 }, (_, i) =>
  i - 5 === 1 ? (
    <Fragment key={i - 5}>
      <hr />
      <option value={i - 5}>{i - 5}</option>
    </Fragment>
  ) : (
    <option key={i - 5} value={i - 5}>
      {i - 5}
    </option>
  ),
);

// const sum = (scores: number[]) =>
//   scores.reduce((accumulator: number, score: number) => accumulator + score, 0);

const App = () => {
  // const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2']);
  const players = ["Player 1", "Player 2"];

  const [scores, setScores] = useState<number[][]>([[0, 0]]); // [hole][player]

  const addHole = () => {
    const updatedScores = [...scores, [0, 0]];
    setScores(updatedScores);
  };

  const updateScores = (holeIndex: number, playerScoreIndex: number, newScore: number) => {
    const updatedHole = scores[holeIndex].map((playerScore, index) => index === playerScoreIndex ? newScore : playerScore);
    const updatedScores = scores.map((hole, index) => index === holeIndex ? updatedHole : hole);
    setScores(updatedScores);
  };

  return (
    <div>
        <h1>Mini golf</h1>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Hole</div>
            {players.map((player) => <div>{player}</div>)}
          </div>
          {scores.map((hole, holeIndex) => (
            <div key={holeIndex} style={{ display: "flex", justifyContent: "space-between" }}>
                Hole {holeIndex + 1}:
                {hole.map((playerScore, playerScoreIndex) => (
                    <select value={playerScore} key={playerScoreIndex} onChange={(event: ChangeEvent<HTMLSelectElement>) => updateScores(holeIndex, playerScoreIndex, parseInt(event.target.value))}>
                      {generateSelectOptions}
                    </select>
                ))}
            </div>
          ))}
        </div>
        <button onClick={addHole}>Add hole</button>
    </div>
  );
};

export default App;
