import Home from "./page/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoutes from "./page/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
