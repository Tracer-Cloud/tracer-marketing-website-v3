'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const [BlogContent, setBlogContent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Dynamic import in useEffect
    import(`@/components/content/blog/${slug}.mdx`)
      .then((module) => {
        setBlogContent(() => module.default);
      })
      .catch(() => {
        setError(true);
      });
  }, [slug]);

  if (error) {
    notFound();
    return null; // This line will never execute but is needed for TypeScript
  }

  if (!BlogContent) {
    return <div>Loading...</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <BlogContent />
    </article>
  );
}
