import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Customize from "./pages/Customize";
import { userDataContext } from "./context/UserContext";
import Home from "./pages/Home";
import Customize2 from "./pages/Customize2";

function App() {
  const { userData } = useContext(userDataContext);

  console.log("userData check =>", userData);

  return (
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          userData ? (
            userData.assistantImage && userData.assistantName ? (
              <Home />
            ) : (
              <Navigate to="/customize" />
            )
          ) : (
            <Navigate to="/signin" />
          )
        }
      />

      {/* Signup route */}
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to="/" />}
      />

      {/* Signin route */}
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to="/" />}
      />

      {/* Customize route */}
      <Route
        path="/customize"
        element={userData ? <Customize /> : <Navigate to="/signup" />}
      />

      {/* Customize2 route */}
      <Route
        path="/customize2"
        element={userData ? <Customize2 /> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default App;
