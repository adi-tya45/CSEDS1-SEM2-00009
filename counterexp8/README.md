# Counter App - Experiment 8: State Management using useState Hook

## Aim
Develop a React counter application using useState and event handling.

## Problem Statement
Create a React application that:
1. Displays a counter value (initially 0)
2. Provides three buttons:
   - **Increment (+)** - increases counter by 1
   - **Decrement (-)** - decreases counter by 1
   - **Reset** - resets counter to 0
3. Uses useState to manage counter value
4. Uses event handling to update counter dynamically

## Learning Objectives
After completing this experiment, students will be able to:
- Understand React Hooks
- Use useState for state management
- Handle button click events
- Update UI dynamically

## Covers Syllabus
- useState hook
- Event handling
- State management

## Project Structure
```
counterexp8/
├── src/
│   ├── App.jsx          # Main counter component with useState
│   ├── App.css          # Styling for the counter app
│   ├── index.css        # Global styles
│   └── main.jsx         # React DOM rendering
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Key Concepts Demonstrated

### useState Hook
```jsx
const [counter, setCounter] = useState(0);
```
- `counter`: Current state value
- `setCounter`: Function to update state
- `0`: Initial state value

### Event Handling
```jsx
<button onClick={handleIncrement}>
  Increment (+)
</button>
```

### State Update
```jsx
const handleIncrement = () => {
  setCounter(counter + 1);
};
```

## Features
- Beautiful gradient UI with responsive design
- Three interactive buttons for counter operations
- Real-time counter value display
- Learning objectives showcase
- Mobile-friendly responsive layout

## Technologies Used
- React 19.2.6
- Vite 8.0.12
- CSS3 with gradients and animations
- JavaScript ES6+

---
**Created for React Learning & Experimentation**
