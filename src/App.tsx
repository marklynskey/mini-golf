import { Fragment, useState } from "react";
import styles from "./App.module.css";

type Player = {
  id: number;
  name: string;
  scores: number[];
};

const defaultData: Player[] = [
  {
    id: 0,
    name: "Player 1",
    scores: new Array(9).fill(0),
  },
  {
    id: 1,
    name: "Player 2",
    scores: new Array(9).fill(0),
  },
];

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

const sum = (scores: number[]) =>
  scores.reduce((accumulator: number, score: number) => accumulator + score, 0);

const App = () => {
  const [data, setData] = useState<Player[]>(defaultData);

  const updateScore = (playerId: number, hole: number, score: number) => {
    const newData = data.map((player) => {
      if (player.id !== playerId) {
        return player;
      } else {
        const scoresCopy = player.scores;
        scoresCopy[hole] = score;

        return {
          ...player,
          scores: scoresCopy,
        };
      }
    });

    setData(newData);
  };

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1>Mini golf</h1>
        <div className={styles.scoresContainer}>
          {data.map((player) => (
            <div className={styles.scores} key={player.id}>
              <h2>{player.name}</h2>
              <ul className={styles.scoreList}>
                {player.scores.map((score, index) => (
                  <li className={styles.scoreListItem} key={index}>
                    <select
                      value={score}
                      onChange={(event) =>
                        updateScore(
                          player.id,
                          index,
                          Number(event.target.value),
                        )
                      }
                    >
                      {generateSelectOptions}
                    </select>
                  </li>
                ))}
              </ul>
              <strong>Total: {sum(player.scores)}</strong>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
