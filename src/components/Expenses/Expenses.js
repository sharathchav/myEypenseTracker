import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(propss) {

  return (
    <Card className="expenses">
      <ExpenseItem
        title={propss.items[0].title}
        Amount={propss.items[0].amount}
        date={propss.items[0].date}
      />
      <ExpenseItem
        title={propss.items[1].title}
        Amount={propss.items[1].amount}
        date={propss.items[1].date}
      />
      <ExpenseItem
        title={propss.items[2].title}
        Amount={propss.items[2].amount}
        date={propss.items[2].date}
      />
      <ExpenseItem
        title={propss.items[3].title}
        Amount={propss.items[3].amount}
        date={propss.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
