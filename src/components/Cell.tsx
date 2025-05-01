import styles from "./Cell.module.css";
import type { DivComponentProps } from "../types/types";

const Cell = ({ children, ...restProps }: DivComponentProps) => (
  <div className={styles.cell} {...restProps}>
    {children}
  </div>
);

export default Cell;
