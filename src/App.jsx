import React, { useState, useEffect } from "react";
import SideBar from "./Components/SideBar";
import Login_Res from "./Components/Login_Res";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [demo, setDemo] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setDemo(!!localStorage.getItem("token")); // ✅ Always check token existence dynamically
  }, []);

  return (
    <div style={{ fontFamily: "Arcadia, sans-serif", fontSize: "14px" }}>
      <ToastContainer />
      {demo ? <SideBar demo={demo} setDemo={setDemo} /> : <Login_Res demo={demo} setDemo={setDemo} />}
    </div>
  );
};

export default App;
