export const questions = {
  questions: [
    // Intermediate HTML - Forms
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The HTML __ element is used to group related input fields within a form.",
      blanks: ["<fieldset>"],
      note: "Forms"
    },
    // Intermediate HTML - Attributes
    {
      id: 2,
      type: "multiple-choice",
      question: "Which attribute specifies an alternate text for an image in case the image cannot be displayed?",
      options: ["title", "alt", "src", "text"],
      correctAnswers: ["alt"],
      multipleAnswers: false,
      note: "Attributes"
    },
    // Intermediate CSS - Box Model
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ property in CSS sets the space between the content and the border of an element.",
      blanks: ["padding"],
      note: "Box Model"
    },
    // Intermediate CSS - Positioning
    {
      id: 4,
      type: "multiple-choice",
      question: "Which CSS position property keeps an element at a fixed location relative to the viewport?",
      options: ["static", "absolute", "fixed", "relative"],
      correctAnswers: ["fixed"],
      multipleAnswers: false,
      note: "Positioning"
    },
    // Intermediate JavaScript - DOM Manipulation
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ method is used to add an element to the end of a parent node in the DOM.",
      blanks: ["appendChild"],
      note: "DOM Manipulation"
    },
    // Intermediate JavaScript - Arrays
    {
      id: 6,
      type: "multiple-choice",
      question: "Which method is used to create a new array from an existing array by applying a function to each element?",
      options: ["filter", "map", "reduce", "forEach"],
      correctAnswers: ["map"],
      multipleAnswers: false,
      note: "JavaScript Arrays"
    },
    // Intermediate JavaScript - Functions
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "Arrow functions were introduced in __ version of JavaScript.",
      blanks: ["ES6"],
      note: "JavaScript Functions"
    },
    // Intermediate CSS - Transitions
    {
      id: 8,
      type: "multiple-choice",
      question: "Which property is used to define the duration of a CSS transition?",
      options: ["transition-duration", "animation-duration", "transition-delay", "animation-delay"],
      correctAnswers: ["transition-duration"],
      multipleAnswers: false,
      note: "CSS Transitions"
    },
    // Intermediate CSS - Media Queries
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used in CSS to apply styles only if the viewport matches certain criteria.",
      blanks: ["@media"],
      note: "Media Queries"
    },
    // Intermediate JavaScript - Events
    {
      id: 10,
      type: "multiple-choice",
      question: "Which method is used to prevent the default behavior of an event?",
      options: ["stopPropagation", "preventDefault", "stopDefault", "cancelEvent"],
      correctAnswers: ["preventDefault"],
      multipleAnswers: false,
      note: "JavaScript Events"
    },
    // Intermediate Web APIs - LocalStorage
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "The __ method of the LocalStorage API is used to remove a specific item.",
      blanks: ["removeItem"],
      note: "LocalStorage"
    },
    // Intermediate Web Performance - Optimization
    {
      id: 12,
      type: "multiple-choice",
      question: "Which technique is used to optimize web performance by loading only visible content?",
      options: ["Lazy loading", "Eager loading", "Caching", "Prefetching"],
      correctAnswers: ["Lazy loading"],
      multipleAnswers: false,
      note: "Web Performance"
    },
    // Intermediate CSS - Flexbox Alignment
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ property in Flexbox aligns items along the cross-axis.",
      blanks: ["align-items"],
      note: "Flexbox"
    },
    // Intermediate JavaScript - Template Literals
    {
      id: 14,
      type: "multiple-choice",
      question: "Which symbol is used to define a JavaScript template literal?",
      options: ["\"", "'", "`", "$"],
      correctAnswers: ["`"],
      multipleAnswers: false,
      note: "Template Literals"
    },
    // Intermediate HTML - Metadata
    {
      id: 15,
      type: "matching",
      question: "Match the meta tags with their purposes:",
      leftItems: ["viewport", "charset", "description"],
      rightItems: [
        "Specifies how content is displayed on mobile",
        "Defines the character encoding",
        "Provides a brief summary of the page"
      ],
      correctMatches: {
        viewport: "Specifies how content is displayed on mobile",
        charset: "Defines the character encoding",
        description: "Provides a brief summary of the page"
      },
      note: "HTML Metadata"
    }
  ]
};
