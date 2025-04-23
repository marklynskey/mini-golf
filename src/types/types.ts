import type { HTMLAttributes, ReactNode } from "react";

export interface DivComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}