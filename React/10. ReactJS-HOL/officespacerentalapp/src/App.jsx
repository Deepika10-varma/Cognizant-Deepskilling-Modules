import "./App.css";
import officeImg from "./assets/office.jpg";

function App() {
  const heading = "Office Space";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad",
    },
    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Pune",
    },
  ];

  return (
    <div className="container">
      <h1>{heading}, at Affordable Range</h1>

      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <img
            src={officeImg}
            alt="Office Space"
            width="250"
            height="180"
          />

          <h2>Name: {office.Name}</h2>

          <h3
            style={{
              color: office.Rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;