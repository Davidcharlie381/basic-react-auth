import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="signup"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
