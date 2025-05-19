# Law AI - Indian Law Chatbot

## Introduction
Law AI is an innovative web-based chatbot designed to provide accurate and accessible information on Indian laws, regulations, and legal procedures. Powered by the Gemini API, Law AI offers users a seamless way to explore legal queries with a focus on Indian jurisprudence. The application features a modern, dark-themed interface with a cyberpunk aesthetic, complete with dynamic visual effects like a moving grid background, a typewriter-animated title, and an interactive 3D chat window. Whether you're a student, professional, or individual seeking clarity on Indian legal matters, Law AI delivers reliable answers in an engaging and user-friendly format.

### About the Project
Law AI was developed to bridge the gap between complex legal information and everyday users by leveraging AI technology. The chatbot specializes in Indian law, answering questions about topics such as constitutional law, criminal law, civil procedures, and more. The interface is designed to be visually appealing and intuitive, with a focus on accessibility and responsiveness across devices. The project integrates custom-designed UI components, including an animated button and a 3D card effect for the chat window, inspired by contributions from the Uiverse.io community.

### How to Use
1. **Access the Chatbot**: Open the application in a web browser (hosted locally or via a platform like GitHub Pages, Netlify, or Vercel).
2. **Enter a Query**: Type your question about Indian law in the textarea at the bottom of the chat window. For example, ask about specific laws, legal procedures, or rights under Indian regulations.
3. **Submit Your Question**: Click the "Send" button or press the Enter key to submit your query. Use Shift+Enter to add new lines within the textarea.
4. **View Responses**: The chatbot will display your question and the AI-generated response in the chat window, with user messages in purple and bot responses in cyan.
5. **Interact with the Interface**: Hover over the chat window to experience the 3D card effects, glowing elements, and animated particles for an immersive experience.

### Features
- **Dark Cyberpunk Theme**: A sleek, dark interface with a futuristic grid background that moves subtly to enhance the visual experience.
- **Typewriter Title Animation**: The "Law AI" title animates with a typewriter effect, adding a dynamic touch to the header.
- **Interactive 3D Chat Window**: The chat area uses a cyberpunk-inspired card design with 3D hover effects, glowing elements, particles, and scan lines (adapted from Uiverse.io by 00Kubi).
- **Animated Send Button**: A stylish button with sparkle animations and a rotating border effect for sending messages (adapted from Uiverse.io by MuhammadHasann).
- **Gemini API Integration**: Connects to the Gemini API to provide accurate, AI-powered responses tailored to Indian law.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices, ensuring accessibility for all users.
- **User-Friendly Input**: Supports message submission via button click or Enter key, with Shift+Enter for multi-line inputs.
- **Dynamic Chat Display**: Messages are displayed with gradient backgrounds (purple for user, cyan for bot) and auto-scroll to the latest message.

### Benefits
- **Accessible Legal Information**: Simplifies access to Indian legal knowledge, making it easier for non-experts to understand laws and regulations.
- **Time-Saving**: Quickly provides accurate answers to legal queries without the need to search through complex legal texts or websites.
- **Engaging User Experience**: The visually appealing cyberpunk design and interactive elements make learning about law engaging and enjoyable.
- **Reliable AI Responses**: Leverages the Gemini API to deliver precise and contextually relevant information on Indian law.
- **Open Source**: Hosted on GitHub, allowing developers to contribute, customize, or extend the project for additional use cases.
- **Educational Tool**: Ideal for students, legal professionals, and curious individuals looking to explore Indian legal frameworks in an interactive way.

## Project Structure
- `index.html`: The main HTML file containing the structure of the chatbot interface.
- `styles.css`: The CSS file with all styling, including the dark theme, grid background, typewriter effect, card styles, and button animations.
- `script.js`: The JavaScript file handling chat functionality, Gemini API integration, and user input processing.
- `README.md`: This file, providing project details and setup instructions.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/law-ai.git
   cd law-ai
   ```

2. **Configure the Gemini API Key**:
   - Obtain a Gemini API key from [Google Cloud](https://cloud.google.com/).
   - Open `script.js` and replace `'YOUR_GEMINI_API_KEY'` with your actual API key:
     ```javascript
     const API_KEY = 'your-actual-gemini-api-key';
     ```

3. **Host the Application**:
   - Use a local server (e.g., with Python):
     ```bash
     python -m http.server 8000
     ```
   - Or deploy to a web server or hosting platform like GitHub Pages, Netlify, or Vercel.
   - Open your browser and navigate to `http://localhost:8000` (or the deployed URL).

4. **Usage**:
   - Enter a question about Indian law in the textarea.
   - Click the "Send" button or press Enter to submit.
   - The chatbot will respond with information powered by the Gemini API.
   - Use Shift+Enter to add new lines in the input field.

## Dependencies
- No external libraries are required; the project uses vanilla HTML, CSS, and JavaScript.
- The Gemini API is accessed via a direct HTTP request (ensure your API key is valid).

## Credits
- **Button Design**: Adapted from [Uiverse.io by MuhammadHasann](https://uiverse.io/MuhammadHasann).
- **Card Design**: Adapted from [Uiverse.io by 00Kubi](https://uiverse.io/00Kubi).
- **Gemini API**: Powered by Google Cloud's Gemini API for natural language processing.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/dipmanmajumdar/Law-AI/blob/main/LICENSE) file for details.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### Instructions for Use
1. **Copy the Content**: Copy the entire Markdown content above.
2. **Update the Repository**:
   - Open your `law-ai` repository on GitHub.
   - Replace the existing `README.md` file's content with the copied content.
   - Alternatively, edit the `README.md` file locally and push the changes:
     ```bash
     git add README.md
     git commit -m "Updated README with detailed introduction, features, and benefits"
     git push origin main
     ```
3. **Ensure Other Files**: Verify that `index.html`, `styles.css`, and `script.js` from the previous response are in your repository, as they remain unchanged.
4. **API Key**: Replace `'YOUR_GEMINI_API_KEY'` in `script.js` with your actual Gemini API key, as noted in the setup instructions.

This `README.md` is formatted for direct use on GitHub, providing a professional and detailed overview of the Law AI project, including its purpose, usage, features, and benefits, making it accessible to users and contributors.
