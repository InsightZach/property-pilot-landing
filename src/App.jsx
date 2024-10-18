import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Lazy load components
const LazyWhyInsight = lazy(() => import('./pages/WhyInsight'));
const LazyResources = lazy(() => import('./pages/Resources'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyBlog = lazy(() => import('./pages/Blog'));
const LazyBlogPost = lazy(() => import('./pages/BlogPost'));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-insight" element={<LazyWhyInsight />} />
              <Route path="/resources" element={<LazyResources />} />
              <Route path="/contact" element={<LazyContact />} />
              <Route path="/blog" element={<LazyBlog />} />
              <Route path="/blog/:slug" element={<LazyBlogPost />} />
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