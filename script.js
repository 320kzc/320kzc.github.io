const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`Webサイトからの問い合わせ: ${name}`);
  const body = encodeURIComponent(
    [
      "千田和央",
      "",
      "Webサイトから問い合わせします。",
      "",
      `お名前: ${name}`,
      `会社名: ${company || "未入力"}`,
      `メールアドレス: ${email}`,
      "",
      "ご相談内容:",
      message,
    ].join("\n"),
  );

  note.textContent = "メール作成画面を開いています。宛先メールアドレスは公開前に設定してください。";
  window.location.href = `mailto:ka00zu+contact@gmail.com?subject=${subject}&body=${body}`;
});
