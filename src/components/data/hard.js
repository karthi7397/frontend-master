export const questions = {
  questions: [
    // Advanced HTML - Semantic Elements
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The __ HTML element is used to group related content, typically with a heading.",
      blanks: ["<section>"],
      note: "Semantic Elements"
    },
    // Advanced CSS - Pseudo-classes
    {
      id: 2,
      type: "multiple-choice",
      question: "Which pseudo-class selects an element that is the first child of its parent?",
      options: [":first-of-type", ":first-child", ":nth-child(1)", ":root"],
      correctAnswers: [":first-child"],
      multipleAnswers: false,
      note: "CSS Pseudo-classes"
    },
    // Advanced CSS - Specificity
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ property in CSS overrides inline styles if marked with `!important`.",
      blanks: ["cascading"],
      note: "CSS Specificity"
    },
    // Advanced JavaScript - Closures
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "A closure is created when a function __ another function's scope even after the outer function has executed.",
      blanks: ["remembers"],
      note: "Closures"
    },
    // Advanced JavaScript - Promises
    {
      id: 5,
      type: "multiple-choice",
      question: "Which method is used to execute code when a promise is rejected?",
      options: ["then", "catch", "finally", "resolve"],
      correctAnswers: ["catch"],
      multipleAnswers: false,
      note: "JavaScript Promises"
    },
    // Advanced JavaScript - Async/Await
    {
      id: 6,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used in JavaScript to pause the execution of an async function.",
      blanks: ["await"],
      note: "Async/Await"
    },
    // Advanced DOM - Event Delegation
    {
      id: 7,
      type: "multiple-choice",
      question: "Which event property refers to the element that triggered the event?",
      options: ["currentTarget", "target", "eventElement", "srcElement"],
      correctAnswers: ["target"],
      multipleAnswers: false,
      note: "Event Delegation"
    },
    // Advanced CSS - Flexbox
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "In CSS Flexbox, the __ property specifies how flex items are distributed along the main axis.",
      blanks: ["justify-content"],
      note: "CSS Flexbox"
    },
    // Advanced CSS - Grid Layout
    {
      id: 9,
      type: "multiple-choice",
      question: "Which CSS property defines the number of columns in a CSS grid?",
      options: ["grid-columns", "grid-template-columns", "columns", "grid-setup"],
      correctAnswers: ["grid-template-columns"],
      multipleAnswers: false,
      note: "CSS Grid Layout"
    },
    // Advanced JavaScript - Modules
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used to import functionality from a JavaScript module.",
      blanks: ["import"],
      note: "JavaScript Modules"
    },
    // Advanced Web APIs - Fetch
    {
      id: 11,
      type: "multiple-choice",
      question: "What does the `fetch` API return?",
      options: ["A Response object", "A Promise", "A JSON object", "An XML object"],
      correctAnswers: ["A Promise"],
      multipleAnswers: false,
      note: "Fetch API"
    },
    // Advanced CSS - Animations
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "In CSS animations, the __ property specifies the duration of the animation.",
      blanks: ["animation-duration"],
      note: "CSS Animations"
    },
    // Advanced JavaScript - Event Loop
    {
      id: 13,
      type: "multiple-choice",
      question: "Which of the following has the highest priority in the JavaScript event loop?",
      options: ["Microtasks", "Macrotasks", "setTimeout", "setInterval"],
      correctAnswers: ["Microtasks"],
      multipleAnswers: false,
      note: "JavaScript Event Loop"
    },
    // Advanced Web Performance - Lazy Loading
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "The `loading='__'` attribute can be used to lazy load images in modern browsers.",
      blanks: ["lazy"],
      note: "Lazy Loading"
    },
    // Advanced Web APIs - IndexedDB
    {
      id: 15,
      type: "matching",
      question: "Match the IndexedDB methods with their purpose:",
      leftItems: ["open", "transaction", "put"],
      rightItems: [
        "Opens a database",
        "Initiates a transaction",
        "Stores data in the database"
      ],
      correctMatches: {
        open: "Opens a database",
        transaction: "Initiates a transaction",
        put: "Stores data in the database"
      },
      note: "IndexedDB"
    }
  ]
};
