document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thanks for your message, ${name}!`);
      form.reset();
    });
  }
});
// SEARCH FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const filter = this.value.toLowerCase();
      const items = document.querySelectorAll(".search-item");

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
      });
    });
  }
});
// CHAT POPUP FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("chatToggle");
  const chatWindow = document.getElementById("chatWindow");
  const chatSend = document.getElementById("chatSend");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  if (toggle && chatWindow) {
    toggle.onclick = () => {
      chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
    };
  }

  if (chatSend) {
    chatSend.onclick = () => {
      const msg = chatInput.value.trim();
      if (msg) {
        const bubble = document.createElement("div");
        bubble.textContent = `You: ${msg}`;
        chatMessages.appendChild(bubble);
        chatInput.value = "";
      }
    };
  }
});
