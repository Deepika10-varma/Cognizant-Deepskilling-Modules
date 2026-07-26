import './App.css';
import CohortDetails from './components/CohortDetails';
import cohorts from './data/cohorts';

function App() {
  return (
    <div className="App">
      <h1>Cohorts Details</h1>

      <div className="container">
        {cohorts.map((cohort) => (
          <CohortDetails
            key={cohort.id}
            cohort={cohort}
          />
        ))}
      </div>
    </div>
  );
}

export default App;