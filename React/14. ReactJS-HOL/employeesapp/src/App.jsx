import { useState } from "react";
import "./App.css";

import ThemeContext from "./ThemeContext";
import EmployeesList from "./components/EmployeesList";

function App() {

  const [theme, setTheme] = useState("light");

  const employees = [
    {
      id: 101,
      name: "John",
      department: "Development",
    },
    {
      id: 102,
      name: "Apoorv",
      department: "Testing",
    },
    {
      id: 103,
      name: "Aathma",
      department: "HR",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>

      <div className="container">

        <h1>Employee Management</h1>

        <div className="buttons">
          <button onClick={() => setTheme("light")}>
            Light Theme
          </button>

          <button onClick={() => setTheme("dark")}>
            Dark Theme
          </button>
        </div>

        <EmployeesList employees={employees} />

      </div>

    </ThemeContext.Provider>
  );
}

export default App;