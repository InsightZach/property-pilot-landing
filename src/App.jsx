import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import WhyInsight from './pages/WhyInsight';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Lazy load components
const LazyBlogPosts = React.lazy(() => import('./components/BlogPosts'))
const LazyMeetTheOwner = React.lazy(() => import('./components/MeetTheOwner'))
const LazyAppealStatistics = React.lazy(() => import('./components/AppealStatistics'))

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-insight" element={<WhyInsight />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<LazyBlogPosts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;