async function sendMessage() {
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = document.getElementById('userMessage').value;

    if (!userMessage.trim()) {
        alert('Please enter a message!');
        return;
    }

    // Append the user's message to the chat window
    const userMessageElem = document.createElement('div');
    userMessageElem.style.color = 'blue';
    userMessageElem.innerText = You; {userMessage};
    chatWindow.appendChild(userMessageElem);

    // Clear input
    document.getElementById('userMessage').value = '';

    // Display bot typing animation
    const botTyping = document.createElement('div');
    botTyping.id = 'botTyping';
    botTyping.innerText = 'Nebula Bot is typing...';
    chatWindow.appendChild(botTyping);

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Send user input to the chatbot backend
    try {
        const response = await fetch('https://your-chatbot-api-endpoint.com/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();

        // Remove bot typing animation
        botTyping.remove();

        // Append bot response to the chat window
        const botMessageElem = document.createElement('div');
        botMessageElem.style.color = 'green';
        botMessageElem.innerText = Nebula_Bot ;{data.reply};
        chatWindow.appendChild(botMessageElem);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;
    } catch (error) {
        botTyping.remove();

        // Show error message
        const errorElem = document.createElement('div');
        errorElem.style.color = 'red';
        errorElem.innerText = 'Nebula Bot: Sorry, I couldn’t process your request. Please try again later.';
        chatWindow.appendChild(errorElem);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}