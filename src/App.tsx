import styles from "./App.module.css";

const data = [
  {
    id: 0,
    name: "Mark",
    scores: [3, 4, 5, 6],
  },
  {
    id: 1,
    name: "Aine",
    scores: [6, 5, 4, 3],
  },
];

const selectOptions = (
  <>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
  </>
);

const App = () => (
  <div className={styles.page}>
    <div className={styles.container}>
      <h1>Mini golf</h1>
      <div className={styles.scoresContainer}>
        {data.map((player) => (
          <div className={styles.scores} key={player.id}>
            <h2>{player.name}</h2>
            <ul className={styles.scoreList}>
              {player.scores.map((score, index) => (
                <li className={styles.scoreListItem} key={index}>
                  <select defaultValue={score}>{selectOptions}</select>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default App;
