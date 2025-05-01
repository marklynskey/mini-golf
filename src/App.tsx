import { type ChangeEvent, Fragment, useState } from "react";
import styles from "./App.module.css";
import clsx from "clsx";
import Row from "./components/Row";
import Cell from "./components/Cell";
import DeleteButton from "./components/DeleteButton";
import ScoreCard from "./components/ScoreCard";

// Options from -5 to 10
const selectOptions = Array.from({ length: 16 }, (_, i) =>
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

const sum = (scores: number[]) =>
  scores.reduce((accumulator: number, score: number) => accumulator + score, 0);

const App = () => {
  // const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2']);
  const players = ["Player 1", "Player 2"];

  const [holes, setHoles] = useState<number[][]>([[0, 0]]); // [hole][player]

  const addHole = () => {
    const updatedHoles = [...holes, [0, 0]];
    setHoles(updatedHoles);
  };

  const updateHoles = (
    holeIndex: number,
    playerScoreIndex: number,
    newScore: number,
  ) => {
    const updatedHole = holes[holeIndex].map((playerScore, index) =>
      index === playerScoreIndex ? newScore : playerScore,
    );
    const updatedHoles = holes.map((hole, index) =>
      index === holeIndex ? updatedHole : hole,
    );
    setHoles(updatedHoles);
  };

  const removeHole = (holeIndex: number) => {
    const updatedHoles = holes.toSpliced(holeIndex, 1);
    setHoles(updatedHoles);
  };

  const getPlayerTotal = (playerIndex: number) => {
    const scores = holes.map((hole) => hole[playerIndex]);
    return sum(scores);
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.content}>
          <ScoreCard>
            <Row isHeader>
              <Cell>Hole:</Cell>
              {players.map((player) => (
                <Cell key={player}>{player}</Cell>
              ))}
              <DeleteButton isSpacer />
            </Row>
            {holes.map((hole, holeIndex) => (
              <Row key={holeIndex}>
                <Cell>Hole {holeIndex + 1}</Cell>
                {hole.map((playerScore, playerScoreIndex) => (
                  <Cell key={playerScoreIndex}>
                    <select
                      className="button button--secondary"
                      value={playerScore}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                        updateHoles(
                          holeIndex,
                          playerScoreIndex,
                          parseInt(event.target.value),
                        )
                      }
                    >
                      {selectOptions}
                    </select>
                  </Cell>
                ))}
                <DeleteButton onClick={() => removeHole(holeIndex)} />
              </Row>
            ))}
          </ScoreCard>
          {/* card was here */}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={clsx("card shadow--md", styles.totalsCard)}>
            <div className="card__body">
              <Row isTotals>
                <Cell>Totals:</Cell>
                {players.map((_, playerIndex) => (
                  <Cell key={playerIndex}>{getPlayerTotal(playerIndex)}</Cell>
                ))}
                <DeleteButton isSpacer />
              </Row>
            </div>
            <div className="card__footer">
              <button
                onClick={addHole}
                className="button button--primary button--block"
              >
                Add hole
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
