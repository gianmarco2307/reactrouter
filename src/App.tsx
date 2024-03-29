import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { AuthProvider, authenticationContext } from "./authenticationProvider";

function LoggedRoute() {
  const { isAuthenticated } = useContext(authenticationContext);
  if (isAuthenticated) return <Navigate to="reactrouter/" />;
  return <Outlet />;
}

function ProtectedRoute() {
  const { isAuthenticated } = useContext(authenticationContext);
  if (!isAuthenticated) return <Navigate to="reactrouter/login" />;
  return <Outlet />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LoggedRoute />}>
            <Route path="reactrouter/login" Component={Login} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="reactrouter/" Component={Home} />
            <Route path="reactrouter/:id" Component={Detail} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
