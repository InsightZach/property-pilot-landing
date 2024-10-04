import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>Blog | Insight Property Tax</title>
        <meta name="description" content="Expert insights on property tax appeals and strategies for Minnesota commercial, industrial, and apartment properties." />
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Insight Property Tax Blog</h1>
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;