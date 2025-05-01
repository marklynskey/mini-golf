import type { HTMLAttributes, ReactNode } from "react";

export interface DivComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface ButtonComponentProps
  extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
