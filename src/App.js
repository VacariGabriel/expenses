import Expenses from './components/Expenses/Expenses';
import './App.css';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car insurance', amount: 294.98, date: new Date(2021, 2, 10) },
    { id: 'e2', title: 'Car insurance', amount: 294.98, date: new Date(2021, 2, 10) },
    { id: 'e3', title: 'Car insurance', amount: 294.98, date: new Date(2021, 2, 10) },
    { id: 'e4', title: 'Car insurance', amount: 294.98, date: new Date(2021, 2, 10) },
  ]

  return (
    <div className="App">
      <Expenses 
        expenses={expenses}
      />
    </div>
  );
}

export default App;
