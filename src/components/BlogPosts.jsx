import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBlogPosts = async () => {
  const response = await axios.get('/blog-posts.json');
  return response.data;
};

const BlogPosts = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog posts</div>;

  const shareOnLinkedIn = (slug) => {
    const postUrl = `https://www.insightpropertytax.com/blog/${slug}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    window.open(linkedInShareUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Card key={post.id} className="bg-white">
          <CardHeader>
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <CardTitle className="text-xl font-semibold text-[#0A2647]">
              <Link to={`/blog/${post.slug}`} className="hover:text-[#d7b971] transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            <button
              onClick={() => shareOnLinkedIn(post.slug)}
              className="inline-block mt-4 bg-[#0077B5] text-white px-4 py-2 rounded hover:bg-[#006097] transition-colors"
            >
              Share on LinkedIn
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPosts;