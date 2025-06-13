const buttons = document.querySelectorAll(".copy-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const codeBlock = btn.closest(".code-block");
    const code = codeBlock.querySelector("code").innerText;
    
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 1500);
    });
  });
});
