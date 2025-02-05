export const Questions = {
  questions: [
    // HTML
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In HTML, the __ element is used to group inline elements for styling purposes.",
      blanks: ["span"],
      note: "HTML Inline Elements"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which HTML attribute is used to define inline CSS?",
      options: ["style", "class", "id", "css"],
      correctAnswers: ["style"],
      multipleAnswers: false,
      note: "HTML Attributes"
    },
    // CSS
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ property in CSS is used to apply styles based on an element’s state.",
      blanks: [":hover"],
      note: "CSS Pseudo-classes"
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which CSS property is used to create space inside an element’s border?",
      options: ["margin", "padding", "border", "width"],
      correctAnswers: ["padding"],
      multipleAnswers: false,
      note: "CSS Box Model"
    },
    // JavaScript Basics
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "In JavaScript, __ is used to store multiple values in a single variable.",
      blanks: ["array"],
      note: "JavaScript Data Structures"
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which method is used to remove the last element from an array in JavaScript?",
      options: ["pop()", "shift()", "splice()", "delete"],
      correctAnswers: ["pop()"],
      multipleAnswers: false,
      note: "JavaScript Array Methods"
    },
    // DOM Manipulation
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "To change an element’s text dynamically in JavaScript, use the __ property.",
      blanks: ["innerText"],
      note: "DOM Manipulation"
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which method is used to select multiple elements in JavaScript?",
      options: ["getElementById()", "querySelector()", "querySelectorAll()", "getElementsByTag()"],
      correctAnswers: ["querySelectorAll()"],
      multipleAnswers: false,
      note: "JavaScript DOM Selection"
    },
    // Responsive Design
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ CSS property is used to make an element responsive by adjusting its size within a container.",
      blanks: ["max-width"],
      note: "Responsive CSS"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which CSS technique allows elements to wrap when they run out of space?",
      options: ["grid", "flex-wrap", "position", "float"],
      correctAnswers: ["flex-wrap"],
      multipleAnswers: false,
      note: "CSS Flexbox"
    },
    // JavaScript Frameworks
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "In React, the __ function is used to update the state in a functional component.",
      blanks: ["setState"],
      note: "React State Management"
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which framework is known for its 'two-way data binding' feature?",
      options: ["React", "Vue", "Angular", "Svelte"],
      correctAnswers: ["Angular"],
      multipleAnswers: false,
      note: "JavaScript Frameworks"
    },
    // Performance & Optimization
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ attribute in a script tag allows JavaScript to load asynchronously.",
      blanks: ["async"],
      note: "Web Performance Optimization"
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which tool is commonly used to minify JavaScript files?",
      options: ["Babel", "Webpack", "UglifyJS", "SASS"],
      correctAnswers: ["UglifyJS"],
      multipleAnswers: false,
      note: "JavaScript Optimization"
    },
    // Version Control
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "In Git, the __ command is used to upload local changes to a remote repository.",
      blanks: ["git push"],
      note: "Git Version Control"
    }
  ]
};
