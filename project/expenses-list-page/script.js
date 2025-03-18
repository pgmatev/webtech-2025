const button = document.getElementById("add-expense-btn");

button.addEventListener("click", () => {
  const inputName = document.getElementById("expense-name");
  const inputAmount = document.getElementById("expense-amount");

  const list = document.getElementById("expenses-list");
  const newItem = document.createElement("li");

  newItem.classList.add("list-item");
  newItem.textContent = `${inputName.value}: ${inputAmount.value} lv`;
  list.appendChild(newItem);

  inputName.value = "";
  inputAmount.value = "";
});

const loggedUser = window.localStorage.getItem("username");
document.getElementById("welcome-message").textContent = `Welcome, ${
  loggedUser || "Guest"
}!`;

document.getElementById("logout-btn").addEventListener("click", () => {
  window.localStorage.removeItem("username");
  window.location.href = "../login-page";
});
