// Language page functions
// 1. Function to simulate selecting a language and getting learner info
function getLanguageLearners(language) {
  const languages = {
    Spanish: "49.8M learners",
    Portuguese: "18.2M learners",
    Arabic: "14.6M learners",
    Japanese: "25.1M learners",
    Greek: "7.3M learners",
    Aramaic: "1.2M learners",
    Hebrew: "6.5M learners",
    Latin: "4.4M learners",
  };

  // Check if the language exists in the object
  if (languages[language]) {
    return `${language} has ${languages[language]}.`;
  } else {
    return "Language not found.";
  }
}

// Example of calling the function
console.log(getLanguageLearners("Spanish")); // Output: Spanish has 49.8M learners.
//   End of example 1
