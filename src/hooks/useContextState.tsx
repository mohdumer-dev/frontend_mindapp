import { stateContent } from "../page/Home";
import { useContext } from "react";

export function useStateContext() {
    const context = useContext(stateContent);
    if (!context) {
      throw new Error("useStateContext must be used within a StateProvider");
    }
    return context;
  }