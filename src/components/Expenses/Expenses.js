import './Expenses.css';
import react, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('all');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.warn(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        props.items.filter(expense => {
          return filteredYear == 'all' || expense.date.getFullYear() === new Date(filteredYear).getFullYear()
        }).map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          )
        })
      }
    </Card>
  );
};

export default Expenses;