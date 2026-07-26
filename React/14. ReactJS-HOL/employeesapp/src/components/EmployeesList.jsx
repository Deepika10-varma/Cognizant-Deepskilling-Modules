import EmployeeCard from "./EmployeeCard";

function EmployeesList({ employees }) {
  return (
    <div className="list">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
        />
      ))}
    </div>
  );
}

export default EmployeesList;