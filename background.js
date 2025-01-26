chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.type === 'getMeaning') {
    // Your logic for handling the message
    sendResponse({ result: 'Meaning of word' });
  }
});
