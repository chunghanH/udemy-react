import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import react, {useState} from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([{
    id: 1,
    title: 'Component',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 2,
    title: 'JSX',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 3,
    title: 'Props',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 4,
    title: 'State',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 5,
    title: 'hook',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 6,
    title: 'redux',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 7,
    title: 'router',
    date: new Date(2020, 7, 8),
    amount:299.9
  },{
    id: 8,
    title: 'next.js',
    date: new Date(2020, 7, 8),
    amount:299.9
  }]);

  const addExpenseHandler = (expense) => {
    console.warn(expense);
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
