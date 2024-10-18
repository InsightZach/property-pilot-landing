import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import HeroCarousel from '../components/HeroCarousel';
import ExpertiseSection from '../components/ExpertiseSection';
import ProcessSection from '../components/ProcessSection';
import CallToAction from '../components/CallToAction';

// Lazy load components
const LazyMeetTheOwner = React.lazy(() => import('../components/MeetTheOwner'))
const LazyAppealStatistics = React.lazy(() => import('../components/AppealStatistics'))

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077]">
      <Helmet>
        <title>Insight Property Tax - Expert Minnesota Property Tax Appeals</title>
        <meta name="description" content="Insight Property Tax specializes in commercial, industrial, and apartment property tax appeals in Minnesota. Maximize your savings with our expert services." />
      </Helmet>
      <HeroCarousel />
      <ExpertiseSection />
      <ProcessSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAppealStatistics />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMeetTheOwner />
      </Suspense>
      <CallToAction />
    </div>
  );
};

export default Index;