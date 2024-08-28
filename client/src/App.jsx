import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';


const App = () => {
  const {authUser}=useAuthContext();
  return (
    <div className='className="d-flex align-items-center justify-content-center"'>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <LogIn />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App