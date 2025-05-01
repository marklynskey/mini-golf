import clsx from "clsx";
import styles from "./ScoreCard.module.css";
import type { DivComponentProps } from "../types/types";

const ScoreCard = ({ children }: DivComponentProps) => (
  <div className={clsx("card shadow--md", styles.scoreCard)}>
    <div className="card__body padding--none">{children}</div>
  </div>
);

export default ScoreCard;
