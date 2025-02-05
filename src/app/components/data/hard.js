export const Questions = {
  questions: [
    // Advanced HTML
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In HTML, the __ attribute ensures accessibility for screen readers when using images.",
      blanks: ["alt"],
      note: "Accessibility in HTML"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which HTML tag is used to define a container for external applications?",
      options: ["<embed>", "<object>", "<iframe>", "<applet>"],
      correctAnswers: ["<iframe>"],
      multipleAnswers: false,
      note: "Embedding Content"
    },
    // Advanced CSS
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In CSS, the __ pseudo-element selects the first letter of a block element.",
      blanks: ["::first-letter"],
      note: "CSS Pseudo-elements"
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which CSS property controls how an element is positioned in a flexible layout?",
      options: ["flex", "justify-content", "align-items", "order"],
      correctAnswers: ["order"],
      multipleAnswers: false,
      note: "CSS Flexbox"
    },
    // JavaScript Advanced Concepts
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "In JavaScript, __ is a function that delays execution until the call stack is clear.",
      blanks: ["setTimeout"],
      note: "JavaScript Asynchronous Execution"
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
      options: [
        "function myFunction() {}",
        "const myFunction = () => {}",
        "var myFunction = function() {}",
        "def myFunction():"
      ],
      correctAnswers: ["def myFunction():"],
      multipleAnswers: false,
      note: "JavaScript Functions"
    },
    // DOM Manipulation
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "To dynamically create an HTML element in JavaScript, use the __ method.",
      blanks: ["createElement"],
      note: "DOM Manipulation"
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which JavaScript property retrieves or modifies an element’s text content?",
      options: ["innerHTML", "textContent", "innerText", "value"],
      correctAnswers: ["textContent"],
      multipleAnswers: false,
      note: "DOM Properties"
    },
    // Advanced Responsive Design
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ CSS function is used to make styles responsive based on a condition.",
      blanks: ["clamp"],
      note: "CSS Functions"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which CSS unit is relative to the width of the viewport?",
      options: ["px", "em", "vh", "rem"],
      correctAnswers: ["vh"],
      multipleAnswers: false,
      note: "Responsive Units"
    },
    // JavaScript Frameworks & Performance
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "In React, components can be optimized using __ to avoid unnecessary re-renders.",
      blanks: ["React.memo"],
      note: "React Performance Optimization"
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which React hook is used to store a reference to a DOM element?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      correctAnswers: ["useRef"],
      multipleAnswers: false,
      note: "React Hooks"
    },
    // Web Performance & Security
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ HTTP header is used to prevent cross-site scripting (XSS) attacks.",
      blanks: ["Content-Security-Policy"],
      note: "Web Security"
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of the following techniques improves web performance?",
      options: ["Lazy Loading", "Blocking Main Thread", "Using Large Images", "Increasing HTTP Requests"],
      correctAnswers: ["Lazy Loading"],
      multipleAnswers: false,
      note: "Web Performance Optimization"
    },
    // Version Control & Build Tools
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "In Git, the command __ is used to create a new branch.",
      blanks: ["git branch"],
      note: "Version Control"
    }
  ]
};
