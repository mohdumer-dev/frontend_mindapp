// import { ReactElement } from "react";

import { ReactElement } from "react";

type TypeVaraint = "primary" | "secondary";

interface ButtonProp {
  varaint: TypeVaraint;
  size: "lg" | "sm";
  text: string;
  onClick: () => void;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

type Style = Record<TypeVaraint, any>;

const Styles: Style = {
  primary: " text-white bg-violet-600",
  secondary: "text-purple-500 bg-violet-200",
};



const size: Record<string, string> = {
  sm: "text-sm",
  lg: "text-lg ",
};
export const Button = (props: ButtonProp) => {
  return (
    <button
      onClick={props.onClick}
      className={`${size[props.size]} ${
        Styles[props.varaint]
      }  cursor-pointer py-2 px-2 rounded-sm font-semibold  flex  gap-2`}
    >
      {props.startIcon?<div>{props.startIcon}</div>:null} {props.text}
      {props.endIcon?<div>{props.endIcon}</div>:null}
    </button>
  );
};
