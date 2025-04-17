//   Start of Shop function example
// Track the user's gem balance
let gems = 500; // Example gem balance

// Function to buy a streak freeze
function buyStreakFreeze() {
  const cost = 200; // Cost of the Streak Freeze power-up

  if (gems >= cost) {
    gems -= cost; // Deduct gems
    alert("You've successfully bought Streak Freeze!");
  } else {
    alert("You don't have enough gems to buy Streak Freeze!");
  }
}

// Example of calling the function (on button click simulation)
console.log(gems); // Check current gems balance
buyStreakFreeze(); // Attempts to buy Streak Freeze
// End of shop functions
