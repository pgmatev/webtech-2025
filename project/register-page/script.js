class UserService {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static login(username, password) {}

  static register(username, email, password) {
    userDatabase.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      alert("User already exists!");
    } else {
      userDatabase.push({ username, email, password });
    }
  }
}
const userDatabase = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email && username && password) {
    User.register(username, email, password);

    if (!existingUser) {
      alert("Invalid credentials!");
    } else {
      alert("Login successful!");
      window.localStorage.setItem("username", username);
      window.location.href = "../expenses-list-page";
    }
  } else {
    alert("Please fill in all fields!");
  }
}
