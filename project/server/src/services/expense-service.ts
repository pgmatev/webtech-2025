import { expenses, Expense } from "./user-service";

export class ExpenseService {
  static getExpenseByUserId(userId: string) {
    const userExpenses = expenses.filter(
      (expense) => expense.userId === userId
    );

    return userExpenses;
  }

  static getAllExpenses() {
    return expenses;
  }

  static addExpense(userId: string, name: string, amount: string) {
    const newExpense: Expense = {
      id: (expenses.length + 1).toString(),
      name,
      amount: parseFloat(amount),
      userId,
    };

    expenses.push(newExpense);

    return newExpense;
  }
}
