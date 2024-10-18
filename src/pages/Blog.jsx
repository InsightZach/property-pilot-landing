import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Insight Property Tax Blog",
  "description": "Expert insights on property tax appeals and strategies for Minnesota commercial, industrial, and apartment properties.",
  "url": "https://insightpropertytax.com/blog"
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Property Tax Insights Blog | Insight Property Tax</title>
        <meta name="description" content="Stay informed with the latest insights on Minnesota property tax appeals, strategies, and industry news. Expert articles from Insight Property Tax to help you navigate your property tax challenges." />
        <meta name="keywords" content="Minnesota property tax blog, tax appeal strategies, commercial property tax insights, industrial property tax news, apartment property tax tips" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Insight Property Tax Blog</h1>
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;