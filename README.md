# Movies_Dashboard-thamiz
# 🎬 Voice-Controlled Movie Explorer

A modern, accessible, and interactive movie browsing application featuring multi-modal interaction (voice, keyboard, mouse, and touch). Built as a demonstration of **Human-Computer Interaction (HCI)** best practices and **Shneiderman's Eight Golden Rules of Interface Design**.

## 🚀 Features

### 1. Multi-Modal Interaction
- **Voice Commands**: Full control using the Web Speech API.
- **Keyboard Navigation**: Comprehensive shortcut support and logical tab flow.
- **Touch & Mouse**: Highly responsive, large tap targets, and smooth animations.

### 2. Interaction Design
- **Real-time Search**: Filter movies instantly as you type.
- **Genre Filtering**: Quick access to Action, Comedy, Sci-Fi, and Drama.
- **Movie Details**: Immersive modal view with high-quality posters and metadata.
- **Personal Watchlist**: Save your favorite movies for later discovery.
- **Theme Support**: Seamlessly switch between Dark and Light modes.

### 3. Voice Command Reference
To activate voice control, click the 🎤 icon or press **'V'**.
- **Search**: "Search *[Movie Name]*" (e.g., *"Search Batman"*)
- **Filter**: "Show *[Genre]* movies" (e.g., *"Show Action movies"*)
- **Open**: "Open *[Movie Name]*" (e.g., *"Open Inception"*)
- **Watchlist**: "Add to watchlist" or "Remove from watchlist" (while viewing details)
- **Navigation**: "Close" or "Close details"
- **Theme**: "Dark mode" or "Light mode"

### 4. Keyboard Shortcuts
- `Ctrl + K` or `/`: Focus search input
- `V`: Toggle voice recognition
- `Enter` / `Space`: Open movie details (when card is focused)
- `Esc`: Close movie details / modal
- `Tab`: Navigate through interactive elements

## 🛠️ Technical Implementation

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3.
- **API**: Uses the Web Speech API for voice recognition.
- **Styling**: Modern CSS with CSS Variables, Flexbox, and Grid.
- **Performance**: Lazy-loaded images and optimized animations.
- **Accessibility**: 
  - Semantic HTML5 structure.
  - Complete ARIA labeling for screen readers.
  - Focus management and visible focus indicators.
  - High color contrast ratios.

## 📂 Project Structure

- `index.html`: Semantic structure and layout.
- `app.js`: Application logic, state management, and voice processing.
- `style.css`: Design system, themes, and animations.

## 🏁 How to Run
Simply open `index.html` in any modern web browser. 
*Note: Voice recognition requires a microphone and works best in Google Chrome or Chromium-based browsers.*
