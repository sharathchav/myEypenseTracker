import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpensedataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onsAddExpense(expenseData);
    };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpensedataHandler} />
    </div>
  );
};

export default NewExpense;
