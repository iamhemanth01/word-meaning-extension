chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  if (message.word) {
    sendResponse({ meaning: 'Meaning of ' + message.word });
  }
  return true;  // Asynchronous response
});
