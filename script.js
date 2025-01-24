// Get elements
const chatbotButton = document.getElementById('chatbotButton');
const chatbotPopup = document.getElementById('chatbotPopup');
const sendButton = document.getElementById('sendButton');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle chatbot popup
chatbotButton.addEventListener('click', () => {
  chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
});

// Send message
sendButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    const userMessageElement = document.createElement('p');
    userMessageElement.textContent = userMessage;
    userMessageElement.style.textAlign = 'right';
    chatMessages.appendChild(userMessageElement);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add a chatbot response (example)
    setTimeout(() => {
      const botMessageElement = document.createElement('p');
      botMessageElement.textContent = 'This is a chatbot response.';
      chatMessages.appendChild(botMessageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});
