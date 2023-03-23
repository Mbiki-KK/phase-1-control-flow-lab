// This function takes in the distance of a ride and returns a greeting message based on the distance.
function scuberGreetingForFeet(rideDistance) {
  // If the ride distance is less than or equal to 400 feet, return "This one is on me!"
  if (rideDistance <= 400) {
    return 'This one is on me!';
  }
  // If the ride distance is between 2000 and 2500 feet, return "I will gladly take your thirty bucks."
  else if (rideDistance > 2000 && rideDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  // If the ride distance is over 2500 feet, return "No can do."
  else if (rideDistance > 2500) {
    return 'No can do.';
  }
}

// This function takes in a destination city and returns a message based on whether it's NYC or not.
function ternaryCheckCity(destinationCity) {
  // If the destination city is NYC, return "Ok, sounds good."
  return (destinationCity === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

// This function takes in the amount of a tip and returns a message based on how generous it is.
function switchOnCharmFromTip(tipAmount) {
  // Use a switch statement to handle different tip amounts
  switch (tipAmount) {
    // If the tip is "generous", return "Thank you so much."
    case 'generous':
      return 'Thank you so much.';
    // If the tip is "not as generous", return "Thank you."
    case 'not as generous':
      return 'Thank you.';
    // For any other tip amount, return "Bye."
    default:
      return 'Bye.';
  }
}






