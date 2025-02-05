export const Questions = {
  questions: [
    // HTML
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In HTML, the __ tag is used to define the largest heading.",
      blanks: ["h1"],
      note: "HTML Headings"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      correctAnswers: ["<a>"],
      multipleAnswers: false,
      note: "HTML Links"
    },
    // CSS
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In CSS, the property used to change text color is __.",
      blanks: ["color"],
      note: "CSS Properties"
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which CSS property is used to control the space between elements?",
      options: ["margin", "padding", "border", "spacing"],
      correctAnswers: ["margin"],
      multipleAnswers: false,
      note: "CSS Box Model"
    },
    // JavaScript Basics
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "In JavaScript, the keyword used to declare a variable is __.",
      blanks: ["var"],
      note: "JavaScript Variables"
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["string", "boolean", "number", "character"],
      correctAnswers: ["character"],
      multipleAnswers: false,
      note: "JavaScript Data Types"
    },
    // DOM Manipulation
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "In JavaScript, the method used to select an element by ID is __.",
      blanks: ["getElementById"],
      note: "DOM Methods"
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which method is used to add an event listener in JavaScript?",
      options: ["addEvent()", "addEventListener()", "onClick()", "setEvent()"],
      correctAnswers: ["addEventListener()"],
      multipleAnswers: false,
      note: "JavaScript Events"
    },
    // Responsive Design
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ unit in CSS is used for responsive font sizing relative to the root element.",
      blanks: ["rem"],
      note: "CSS Units"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which CSS feature allows a webpage to adjust to different screen sizes?",
      options: ["Flexbox", "Grid", "Media Queries", "Animations"],
      correctAnswers: ["Media Queries"],
      multipleAnswers: false,
      note: "Responsive Design"
    },
    // Frameworks and Libraries
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "React components must return a single __ element.",
      blanks: ["JSX"],
      note: "React Basics"
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which JavaScript library is used for DOM manipulation?",
      options: ["React", "Vue", "jQuery", "Bootstrap"],
      correctAnswers: ["jQuery"],
      multipleAnswers: false,
      note: "JavaScript Libraries"
    },
    // Performance and Optimization
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ attribute in an image tag helps browsers load images faster.",
      blanks: ["loading"],
      note: "Web Performance"
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which technique helps to load a webpage faster?",
      options: ["Minifying CSS/JS", "Using large images", "Adding more requests", "Using inline styles"],
      correctAnswers: ["Minifying CSS/JS"],
      multipleAnswers: false,
      note: "Web Optimization"
    },
    // Version Control
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "The command __ is used to initialize a Git repository.",
      blanks: ["git init"],
      note: "Version Control"
    }
  ]
};
