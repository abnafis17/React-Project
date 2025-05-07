import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen"> 
      <Tasklist></Tasklist>
    </div>
  );
}

export default App;
