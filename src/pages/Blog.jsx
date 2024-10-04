import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';
import { Button } from "@/components/ui/button";

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Insight Property Tax Blog</h1>
          <Link to="/admin/create-post">
            <Button className="bg-[#d7b971] hover:bg-[#c7a961] text-[#0A2647]">
              Create New Post
            </Button>
          </Link>
        </div>
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;