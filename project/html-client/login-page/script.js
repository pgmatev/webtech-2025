const userDatabase = [
  {
    email: "admin@admin.com",
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

class UserService {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static login(username, password) {
    const existingUser = userDatabase.find(
      (user) => user.username === username && user.password === password
    );

    return {
      existingUser,
    };
  }

  static register(username, email, password) {
    const existingUserByEmail = userDatabase.find(
      (user) => user.email === email
    );

    const existingUserUsername = userDatabase.find(
      (user) => user.username === username
    );
    if (existingUserByEmail || existingUserUsername) {
      console.log(existingUserByEmail, existingUserUsername);
      return {
        usernameError: !!existingUserUsername,
        emailError: !!existingUserByEmail,
      };
    } else {
      userDatabase.push({ username, email, password });
      return {};
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    const { existingUser } = UserService.login(username, password);

    if (existingUser) {
      alert("Login successful!");
      window.localStorage.setItem("username", username);
      window.location.href = "../expenses-list-page";
    } else {
      alert("Invalid credentials!");
    }
  } else {
    alert("Please fill in all fields!");
  }
}

function handleRegisterSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email && username && password) {
    const { usernameError, emailError } = UserService.register(
      username,
      email,
      password
    );

    if (usernameError) {
      document.getElementById("username-error").textContent =
        "Username already exists!";
    }

    if (emailError) {
      document.getElementById("email-error").textContent =
        "Email already exists!";
    }

    if (!usernameError && !emailError) {
      alert("Registration successful!");
      window.localStorage.setItem("username", username);
      window.location.href = "../expenses-list-page";
    }
  } else {
    alert("Please fill in all fields!");
  }
}

document.getElementById("email").addEventListener("input", () => {
  document.getElementById("email-error").textContent = "";
});

document.getElementById("username").addEventListener("input", () => {
  document.getElementById("username-error").textContent = "";
});
