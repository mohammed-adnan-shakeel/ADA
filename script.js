const buttons = document.querySelectorAll(".copy-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 1500);
    });
  });
});
