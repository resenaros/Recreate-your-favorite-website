// Home Page Progress-Progress Bar
const progress = {
  Aramaic: 60,
  Greek: 45,
  Hebrew: 75,
  Latin: 20,
};

// Shows the original Latin value
console.log(`Original Latin progress: ${progress.Latin}%`);

function updateProgress(language, newProgress) {
  if (progress[language] !== undefined) {
    progress[language] = newProgress;
    console.log(
      `Your ${language} progress is now at ${newProgress}%! Keep it up!`
    );
  } else {
    console.log(`${language} is not currently being tracked.`);
  }
}

// Update Latin
updateProgress("Latin", 25);
updateProgress("Arabic", 20);
// End of Home Page Progress-Progress bar
