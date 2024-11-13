Office.onReady(() => {
  console.log('Add-in initialized successfully');
  Office.context.mailbox.item.addHandlerAsync(Office.EventType.ItemSend, handleEmailSend);
});

let isTrackingEnabled = true;
let selectedCampaignId = null;

function setTrackingState(enabled, campaignId) {
  isTrackingEnabled = enabled;
  selectedCampaignId = campaignId;
  console.log(`Tracking ${enabled ? 'enabled' : 'disabled'} for campaign: ${campaignId}`);
}

function generateTrackingId() {
  return crypto.randomUUID();
}

async function handleEmailSend(event) {
  if (!isTrackingEnabled) {
    console.log('Email tracking is disabled, sending without tracking pixel');
    event.completed({ allowEvent: true });
    return;
  }

  const trackingId = generateTrackingId();
  const item = Office.context.mailbox.item;
  
  try {
    console.log('Processing email send event');
    // Get current email body
    item.body.getAsync(Office.CoercionType.Html, async (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const currentBody = result.value;
        const trackingPixel = `<img src="https://lzhfvmjogwinlplqwbwk.functions.supabase.co/track-email?id=${trackingId}&campaign=${selectedCampaignId}" width="1" height="1" />`;
        
        console.log('Adding tracking pixel with ID:', trackingId, 'for campaign:', selectedCampaignId);
        // Add tracking pixel to email body
        const newBody = currentBody + trackingPixel;
        
        // Set modified email body
        item.body.setAsync(newBody, { coercionType: Office.CoercionType.Html }, (result) => {
          if (result.status === Office.AsyncResultStatus.Succeeded) {
            console.log('Successfully added tracking pixel');
            // Log the initial send event
            fetch('https://lzhfvmjogwinlplqwbwk.functions.supabase.co/track-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                trackingId,
                campaignId: selectedCampaignId,
                eventType: 'sent',
                emailSubject: item.subject,
                emailRecipient: item.to[0].emailAddress
              })
            }).catch(console.error);
            
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

// Expose functions to window for React component access
window.outlookTracking = {
  setTrackingState
};