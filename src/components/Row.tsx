import clsx from "clsx";
import styles from "./Row.module.css";
import type { DivComponentProps } from "../types/types";

interface RowProps extends DivComponentProps {
  isHeader?: boolean;
  isTotals?: boolean;
}

const Row = ({
  children,
  isHeader = false,
  isTotals = false,
  ...restProps
}: RowProps) => (
  <div
    className={clsx(
      styles.row,
      isHeader && styles.isHeader,
      isTotals && styles.isTotals,
    )}
    {...restProps}
  >
    {children}
  </div>
);

export default Row;
