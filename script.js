const API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with your Gemini API key
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    userInput.value = '';

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // Make API call to Gemini
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a legal assistant specialized in Indian law. Provide accurate information about Indian laws, regulations, and legal procedures. Answer the following question: ${message}`
                    }]
                }]
            })
        });

        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;

        // Add bot response to chat
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'message bot-message';
        errorMessage.textContent = 'Sorry, there was an error processing your request.';
        chatBox.appendChild(errorMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Allow sending message with Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});
