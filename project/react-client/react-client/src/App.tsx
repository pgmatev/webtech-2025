import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Expense } from "./models/Expense";
import { Button } from "./components/Button.component";
import { useHttp } from "./hooks/useHttp";
import { ExpensesList } from "./components/ExpensesList.component";

function App() {
  const { fetchData, expenses, loading, error } = useHttp();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1 id="welcome-message"></h1>
        <Button label="Login" style="primary" />
      </header>
      <div className={styles.form}>
        <input
          id="expense-name"
          type="text"
          placeholder="Enter expense name..."
        />
        <input
          id="expense-amount"
          type="number"
          placeholder="Enter expense amount..."
        />
        <Button label="Add expense" style="success" />
      </div>
      <ExpensesList expenses={expenses} loading={loading} />
    </>
  );
}

export default App;
