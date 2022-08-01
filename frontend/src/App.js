import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  var token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {token && (
          <Route element={<Outlet />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
