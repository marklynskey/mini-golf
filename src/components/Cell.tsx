import clsx from "clsx";
import styles from "./Cell.module.css";
import type { DivComponentProps } from "../types/types";

interface CellProps extends DivComponentProps {
  variant?: string;
}

const Cell = ({ children, variant = "score", ...restProps }: CellProps) => (
  <div className={clsx(styles.cell, styles[variant])} {...restProps}>
    {children}
  </div>
);

export default Cell;
