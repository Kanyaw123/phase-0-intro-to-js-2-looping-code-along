function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
    let count = startingNumber;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  // Example usage:
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);
  
  countDown(10);
  