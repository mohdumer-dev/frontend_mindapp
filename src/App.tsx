import Dashboard from "./page/dashboard";
import { createContext, ReactNode, useContext, useState } from "react";

type StateContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const stateContent = createContext<StateContextType | undefined>(
  undefined
);

function StateContext({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <stateContent.Provider value={{ open, setOpen }}>
      {children}
    </stateContent.Provider>
  );
}

const App = () => {
  return (
    <StateContext>
      <Dashboard />
    </StateContext>
  );
};
export default App;
