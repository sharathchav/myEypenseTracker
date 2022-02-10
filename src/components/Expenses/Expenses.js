import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
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
        {props.items.map((sharath) => (
          <ExpenseItem
            key={sharath.id}
            title={sharath.title}
            Amount={sharath.amount}
            date={sharath.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
