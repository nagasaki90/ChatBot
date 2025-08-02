async function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  addMessage("You", msg);
  input.value = "";

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg }),
  });

  const data = await response.json();
  addMessage("ChatGPT", data.reply);
}

function addMessage(sender, text) {
  const box = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<b>${sender}:</b> ${text}`;
  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
}
