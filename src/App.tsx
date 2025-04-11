import Home from "./page/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./page/Signup";
import Signin from "./page/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
