import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home";
import TrainersList from "./components/TrainersList";
import TrainerDetails from "./components/TrainerDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>Trainers Application</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/trainers">Trainers List</Link>
        </nav>

        <hr />

        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/trainers" element={<TrainersList />} />

          <Route
            path="/trainers/:id"
            element={<TrainerDetails />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;