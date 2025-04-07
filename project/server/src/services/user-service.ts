import { BadRequestError, NotFoundError } from "../exceptions/Exceptions";

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  userId: string;
}

export const users: User[] = [
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

export const expenses: Expense[] = [
  { id: "1", name: "Rent", amount: 1000, userId: "1" },
  { id: "2", name: "Food", amount: 200, userId: "1" },
  { id: "3", name: "Rent", amount: 1000, userId: "2" },
  { id: "4", name: "Food", amount: 200, userId: "2" },
];

export class UserService {
  static login(email: string, password: string) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      throw new BadRequestError("Invalid email or password");
    }

    return user;
  }

  static register(email: string, password: string, username: string) {
    const user = users.find(
      (user) => user.email === email || user.username === username
    );

    if (user) {
      throw new BadRequestError(
        "User with this email or username already exists"
      );
    }

    const newUser: User = {
      id: (users.length + 1).toString(),
      email,
      username,
      password,
    };

    return newUser;
  }

  static getUserByUsername(username: string) {
    const user = users.find((user) => user.username === username);

    if (!user) {
      throw new NotFoundError("User not found.");
    }

    return user;
  }

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
