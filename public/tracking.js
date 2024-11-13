// Initialize tracking
(function() {
    'use strict';

    // Track page views
    function trackPageView() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': 'Outlook Add-in',
                'page_location': 'outlook-addin'
            });
        }
    }

    // Track when add-in is loaded
    function trackAddinLoad() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'addin_load', {
                'event_category': 'Outlook Add-in',
                'event_label': 'Add-in Loaded'
            });
        }
    }

    // Initialize tracking when the page loads
    window.onload = function() {
        trackPageView();
        trackAddinLoad();
    };
})();