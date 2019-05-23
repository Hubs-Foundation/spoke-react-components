import * as React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: IButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
