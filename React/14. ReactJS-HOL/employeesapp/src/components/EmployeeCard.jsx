import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>ID : {employee.id}</p>
      <p>Department : {employee.department}</p>

      <button className={theme}>
        View Profile
      </button>
    </div>
  );
}

export default EmployeeCard;