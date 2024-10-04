import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Property Tax Appeals in Minnesota",
    excerpt: "Learn the basics of property tax appeals and how they can benefit commercial property owners.",
    date: "2024-03-25",
    slug: "understanding-property-tax-appeals-minnesota"
  },
  {
    id: 2,
    title: "5 Strategies to Reduce Your Commercial Property Tax",
    excerpt: "Discover effective strategies to potentially lower your commercial property tax burden in Minnesota.",
    date: "2024-03-18",
    slug: "5-strategies-reduce-commercial-property-tax"
  },
  // Add more blog post objects as needed
];

const BlogPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Card key={post.id} className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-[#0A2647]">
              <Link to={`/blog/${post.slug}`} className="hover:text-[#d7b971] transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPosts;