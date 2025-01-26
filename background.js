chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.word) {
    const query = encodeURIComponent(message.word + " meaning");
    const searchUrl = `https://www.google.com/search?q=${query}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
