chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({newId: 0}, function() {
    console.log("Id is set.");
  });
});