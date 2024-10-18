import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Lazy load components
const LazyBlogPosts = React.lazy(() => import('./components/BlogPosts.jsx'))
const LazyMeetTheOwner = React.lazy(() => import('./components/MeetTheOwner.jsx'))
const LazyAppealStatistics = React.lazy(() => import('./components/AppealStatistics.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)