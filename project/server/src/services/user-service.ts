interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

interface Expense {
  id: string;
  name: string;
  amount: number;
  userId: string;
}

const users: User[] = [
  {
    id: "1",
    email: "admin@admin.com",
    username: "admin",
    password: "admin",
  },
  {
    id: "2",
    email: "test@test",
    username: "test",
    password: "test",
  },
];

const expenses: Expense[] = [
  { id: "1", name: "Rent", amount: 1000, userId: "1" },
  { id: "2", name: "Food", amount: 200, userId: "1" },
  { id: "3", name: "Rent", amount: 1000, userId: "2" },
  { id: "4", name: "Food", amount: 200, userId: "2" },
];

export class UserService {
  static getUserExpenses(userId: string) {
    const userExpenses = expenses.filter(
      (expense) => expense.userId === userId
    );

    return userExpenses;
  }

  static addUserExpense(userId: string, name: string, amount: number) {
    const newExpense: Expense = {
      id: (expenses.length + 1).toString(),
      name,
      amount,
      userId,
    };

    expenses.push(newExpense);
  }
}
