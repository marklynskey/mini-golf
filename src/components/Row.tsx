import styles from "./Row.module.css";
import type { DivComponentProps } from "../types/types";

const Row = ({ children, ...restProps }: DivComponentProps) => (
  <div className={styles.row} {...restProps}>{children}</div>
);

export default Row;