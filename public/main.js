// Initialize Office.js
Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    console.log("Office.js is ready in Outlook");
  }
});

// Handle any errors that occur during initialization
Office.initialize = function (reason) {
  console.log("Office initialized with reason:", reason);
};