// src/Blog.tsx
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center animate-text-glow">Katoshi Labs Blog</h1>
      <div className="space-y-8">
        {/* Sample blog post */}
        <article className="bg-space-gray p-6 rounded-lg shadow-neon">
          <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Latest Updates from Katoshi Labs</h2>
          <p className="text-gray-300 mb-4">
            Stay tuned for exciting updates about our latest projects, technological breakthroughs, and industry insights.
          </p>
          <p className="text-gray-400">Posted on: {new Date().toLocaleDateString()}</p>
        </article>
        {/* Add more blog posts here */}
      </div>
    </div>
  );
};

export default Blog;
