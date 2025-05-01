import clsx from "clsx";
import styles from "./DeleteButton.module.css";
import type { ButtonComponentProps } from "../types/types";

interface DeleteButtonProps extends ButtonComponentProps {
  isSpacer?: boolean;
}

const DeleteButton = ({
  children = "⌫",
  isSpacer = false,
  ...restProps
}: DeleteButtonProps) => (
  <button
    aria-hidden={isSpacer}
    className={clsx("button button--danger", isSpacer && styles.isSpacer)}
    tabIndex={isSpacer ? -1 : undefined}
    {...restProps}
  >
    {children}
  </button>
);

export default DeleteButton;
