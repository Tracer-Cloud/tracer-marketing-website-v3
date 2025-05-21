'use client';

import React from 'react';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  if (slug === 'test-post-1') {
    return (
      <div className="prose prose-lg max-w-none">
        <h1>Test Post 1</h1>
        <p>This is a test post with static content instead of MDX.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl 
          nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl 
          aliquet nunc, quis aliquam nisl nunc quis nisl.
        </p>
        <h2>Section 1</h2>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.
        </p>
        <h2>Section 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
  
  if (slug === 'test-post-2') {
    return (
      <div className="prose prose-lg max-w-none">
        <h1>Test Post 2</h1>
        <p>This is another test post with static content instead of MDX.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
          nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl 
          nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl 
          aliquet nunc, quis aliquam nisl nunc quis nisl.
        </p>
        <h2>Section 1</h2>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat.
        </p>
        <h2>Section 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
  
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Post Not Found</h1>
      <p>Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
    </div>
  );
}
