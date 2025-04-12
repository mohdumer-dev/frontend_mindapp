import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import Dashboard from "./dashboard";

type StateContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shareTab:boolean,
  setShareTab:React.Dispatch<React.SetStateAction<boolean>>
};

export const stateContent = createContext<StateContextType | undefined>(
  undefined
);

function StateContext({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const [shareTab, setShareTab] = useState<boolean>(false);
  return (
    <stateContent.Provider value={{ open, setOpen, shareTab, setShareTab }}>
      {children}
    </stateContent.Provider>
  );
}

const Home = () => {
  return (
    <StateContext>
      <Dashboard />
    </StateContext>
  );
};

export default Home;
