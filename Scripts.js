// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  // Quote
  const quoteBtn = document.getElementById("quote-btn");
  const quoteDisplay = document.getElementById("quote-display");

  quoteBtn.addEventListener("click", () => {
    quoteDisplay.classList.toggle("hidden");
  });

  // Deposito
  const depositBtn = document.getElementById("deposit-btn");
  const depositForm = document.getElementById("deposit-form");

  depositBtn.addEventListener("click", () => {
    depositForm.classList.toggle("hidden");
  });

  const confirmDeposit = document.getElementById("confirm-deposit");
  confirmDeposit.addEventListener("click", () => {
    const amount = document.getElementById("deposit-amount").value;
    alert(`Hai depositato €${amount}`);
  });

  // Prelievo
  const withdrawBtn = document.getElementById("withdraw-btn");
  const withdrawForm = document.getElementById("withdraw-form");

  withdrawBtn.addEventListener("click", () => {
    withdrawForm.classList.toggle("hidden");
  });

  const confirmWithdraw = document.getElementById("confirm-withdraw");
  confirmWithdraw.addEventListener("click", () => {
    const amount = document.getElementById("withdraw-amount").value;
    alert(`Hai prelevato €${amount}`);
  });
});
