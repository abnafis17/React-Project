import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tasklist from "./components/Tasklist";
import TaskListByClass from "./components/TaskListByClass"

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen"> 
      <TaskListByClass />
    </div>
  );
}

export default App;
