import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin } from 'lucide-react';

const fetchBlogPost = async (slug) => {
  const response = await axios.get(`/blog-posts/${slug}.json`);
  return response.data;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [imageError, setImageError] = useState(false);
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchBlogPost(slug),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog post</div>;

  const handleImageError = () => setImageError(true);

  const shareOnLinkedIn = () => {
    const postUrl = `https://www.insightpropertytax.com/blog/${slug}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    window.open(linkedInShareUrl, '_blank');
  };

  const fullImageUrl = `https://www.insightpropertytax.com${post.imageUrl}`;
  const canonicalUrl = `https://www.insightpropertytax.com/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2647] via-[#1E3A5F] to-[#2E5077] relative">
      <Helmet>
        <title>{`${post.title} | Insight Property Tax`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content="Zach Hepburn" />
        <meta name="keywords" content="property tax appeals, Minnesota, commercial property, industrial property, apartment property, tax reduction, Insight Property Tax" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={fullImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": fullImageUrl,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": "Zach Hepburn"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Insight Property Tax",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.insightpropertytax.com/logo.svg"
              }
            },
            "description": post.excerpt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <Link to="/blog" className="inline-flex items-center text-white hover:text-[#d7b971] mb-6">
          <ArrowLeft className="mr-2" /> Back to Blog
        </Link>
        <article className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A2647] mb-6">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">Published on {new Date(post.date).toLocaleDateString()}</p>
          {!imageError ? (
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-64 object-cover mb-8 rounded-lg" 
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-8 rounded-lg">
              <p>Image not available</p>
            </div>
          )}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Button
              onClick={shareOnLinkedIn}
              className="inline-flex items-center bg-[#0077B5] text-white px-4 py-2 rounded hover:bg-[#006097] transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;