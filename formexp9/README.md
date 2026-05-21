# Registration Form - Experiment 9: Form Validation & State Management

## Aim
Create a React Registration Form with validation using useState and event handling.

## Problem Statement
Create a React application that:
1. Displays a Registration Form with fields:
   - Name
   - Email
   - Password
2. Uses useState to manage form data
3. Validates:
   - Name should not be empty
   - Email must contain @
   - Password must be at least 6 characters
4. Displays error messages if validation fails
5. Shows success message after valid submission

## Learning Objectives
After completing this experiment, students will be able to:
- Create controlled components in React
- Manage form inputs using useState
- Perform validation on form inputs
- Handle form submission events
- Display error messages dynamically
- Implement conditional rendering

## Covers Syllabus
- useState Hook for Form Data Management
- Controlled Components
- Form Validation
- Event Handling (onChange, onSubmit)
- Error Message Display
- Conditional Rendering

## Project Structure
```
formexp9/
├── src/
│   ├── App.jsx          # Main registration form component
│   ├── App.css          # Form styling
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

### 1. State Management
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
});

const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
```

### 2. Controlled Components
```jsx
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
```

### 3. Form Validation
```jsx
const validateForm = () => {
  const newErrors = {};
  
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }
  
  if (!formData.email.includes('@')) {
    newErrors.email = 'Email must contain @';
  }
  
  if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }
  
  return newErrors;
};
```

### 4. Event Handling
```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Validate and submit
};
```

### 5. Conditional Rendering
```jsx
{isSubmitted ? (
  <div className="success-message">
    {/* Success content */}
  </div>
) : (
  <form>{/* Form content */}</form>
)}
```

## Features
- ✅ Controlled form inputs
- ✅ Real-time error messages that clear as user types
- ✅ Validation for Name, Email, and Password
- ✅ Success message display with auto-reset
- ✅ Beautiful gradient UI
- ✅ Responsive design for mobile devices
- ✅ Smooth animations and transitions
- ✅ Learning concepts showcase

## Validation Rules
| Field | Rules |
|-------|-------|
| Name | Not empty |
| Email | Must contain @ symbol |
| Password | Minimum 6 characters |

## Technologies Used
- React 19.2.6
- Vite 8.0.12
- CSS3 with animations
- JavaScript ES6+ (Destructuring, Spread operator)

## Form Flow
1. User enters data in form fields
2. Error messages display if validation fails
3. Errors clear as user starts typing
4. On valid submission, success message displays
5. Form auto-resets after 2 seconds

---
**Created for React Learning & Experimentation**
