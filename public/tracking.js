Office.onReady(() => {
  // Register event handlers and initialize add-in
  Office.context.mailbox.item.addHandlerAsync(Office.EventType.ItemSend, handleEmailSend);
  updateTrackingStatus();
});

let isTrackingEnabled = true;

function updateTrackingStatus() {
  const statusElement = document.getElementById('tracking-status');
  if (statusElement) {
    statusElement.innerHTML = `Email tracking is ${isTrackingEnabled ? 'enabled' : 'disabled'}`;
  }
}

function generateTrackingId() {
  return crypto.randomUUID();
}

async function handleEmailSend(event) {
  const trackingId = generateTrackingId();
  const item = Office.context.mailbox.item;
  
  try {
    // Get current email body
    item.body.getAsync(Office.CoercionType.Html, async (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const currentBody = result.value;
        const trackingPixel = `<img src="https://lzhfvmjogwinlplqwbwk.functions.supabase.co/track-email?id=${trackingId}" width="1" height="1" />`;
        
        // Add tracking pixel to email body
        const newBody = currentBody + trackingPixel;
        
        // Set modified email body
        item.body.setAsync(newBody, { coercionType: Office.CoercionType.Html }, (result) => {
          if (result.status === Office.AsyncResultStatus.Succeeded) {
            console.log('Successfully added tracking pixel');
            event.completed({ allowEvent: true });
          } else {
            console.error('Failed to add tracking pixel:', result.error);
            event.completed({ allowEvent: true });
          }
        });
      } else {
        console.error('Failed to get email body:', result.error);
        event.completed({ allowEvent: true });
      }
    });
  } catch (error) {
    console.error('Error in handleEmailSend:', error);
    event.completed({ allowEvent: true });
  }
}

// Function to toggle tracking
function toggleTracking() {
  isTrackingEnabled = !isTrackingEnabled;
  updateTrackingStatus();
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
  updateTrackingStatus();
});