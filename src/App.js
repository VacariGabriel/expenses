import ExpenseItem from './components/ExpenseItem';
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
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}  
      />
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date}  
      /> 
    </div>
  );
}

export default App;
