import { use, useState } from "react";
import { Expense } from "../models/expense-models";

export function useHttp() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      console.log("fetching");
      const response = await fetch("http://localhost:5000/expenses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const parsedResponse = await response.json(); // .json is async

      const expenses: Expense[] = parsedResponse.map((expense: any) => {
        console.log("expense:", expense);
        return {
          id: expense.id,
          name: expense.name,
          amount: expense.amount,
          userId: expense.userId,
        };
      });

      setExpenses(expenses);
    } catch (error: any) {
      setError(error.message ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, expenses, loading, error };
}
