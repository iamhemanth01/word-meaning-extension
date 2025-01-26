document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage({ word: selectedText }, (response) => {
      console.log('Response from background:', response);
    });
  }
});
