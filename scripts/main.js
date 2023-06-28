if (!localStorage.getItem("balance_b86")) {
  localStorage.setItem("balance_b86", 10000);
}

if (!localStorage.getItem("bonus_b86")) {
  localStorage.bonus_b86 = 1;

  document.querySelector(".modal").classList.remove("hidden");
}

document.querySelector(".balance").innerHTML = localStorage.balance_b86;

document.querySelector(".modal").onclick = () => {
  document.querySelector(".modal").classList.add("hidden");
};

window.onload = () => {
  document.querySelector(".wrapper").classList.remove("hidden");
};
