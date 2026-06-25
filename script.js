const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");
const submitButton = form?.querySelector('button[type="submit"]');

form?.addEventListener("submit", () => {
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "送信中です...";
  }

  if (note) {
    note.textContent = "入力内容を送信しています。完了画面が表示されるまでお待ちください。";
  }
});
