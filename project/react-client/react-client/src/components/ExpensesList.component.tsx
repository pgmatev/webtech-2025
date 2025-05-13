import { Expense } from "../models/expense-models";
import styles from "./ExpensesList.module.css";

interface ExpenseListProps {
  expenses: Expense[];
  loading: boolean;
}

export function ExpensesList({ expenses, loading }: ExpenseListProps) {
  return (
    <>
      <ul id="expenses-list" className={styles.list}>
        {loading
          ? "It is loading..."
          : expenses?.map((expense: Expense) => (
              <li key={expense.name} className={styles.listItem}>
                <span>{expense.name}</span>
                <span>{expense.amount}</span>
              </li>
            ))}
      </ul>
    </>
  );
}
