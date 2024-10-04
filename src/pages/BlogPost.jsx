import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const fetchBlogPost = async (slug) => {
  const response = await axios.get(`/blog-posts/${slug}.json`);
  return response.data;
};

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPost(slug),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog post</div>;

  const handleImageError = (e) => {
    console.error('Failed to load image:', e.target.src);
    e.target.src = '/placeholder.svg'; // Fallback to a placeholder image
    e.target.alt = 'Placeholder image';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>{post.title} | Insight Property Tax</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#0A2647] mb-4">{post.title}</h1>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 object-cover mb-6 rounded-lg" 
            onError={handleImageError}
          />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8">
            <p className="text-sm text-gray-500">Published on {new Date(post.date).toLocaleDateString()}</p>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://insightpropertytax.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#0077B5] text-white px-4 py-2 rounded hover:bg-[#006097] transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;