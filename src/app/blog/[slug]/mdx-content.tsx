'use client';

import React from 'react';
import { MDXProviderWrapper } from '@/components/MdxProvider';

interface MDXContentProps {
  slug: string;
}

export default function MDXContent({ slug }: MDXContentProps) {
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // Dynamic import in useEffect to ensure client-side execution
    import(`@/components/content/blog/${slug}.mdx`)
      .then((module) => {
        setComponent(() => module.default);
      })
      .catch((err) => {
        console.error(`Error loading MDX file: ${slug}.mdx`, err);
        setError(true);
      });
  }, [slug]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p>Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <MDXProviderWrapper>
        <Component />
      </MDXProviderWrapper>
    </article>
  );
}
