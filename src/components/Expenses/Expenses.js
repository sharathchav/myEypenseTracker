import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(propss) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (fromExpenseFilter) => {
    setFilteredYear(fromExpenseFilter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={propss.items[0].titles}
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
    </div>
  );
}

export default Expenses;
