import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Temporary hardcoded version for testing
export async function generateStaticParams() {
  // Using hardcoded values instead of dynamic file system operations
  return [
    { slug: 'test-post-1' },
    { slug: 'test-post-2' },
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  try {
    // Await the params Promise to get the slug
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const { metadata } = await import(`@/components/content/blog/${slug}.mdx`);

    return {
      title: metadata.title || 'Blog Post',
      description: metadata.description,
      openGraph: metadata.ogImage
        ? { images: [metadata.ogImage] }
        : undefined,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: 'Blog Post Not Found' };
  }
}

// Page component with params as Promise to match Next.js 15 internal type
export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    // Await the params Promise to get the slug
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // Dynamic import of the MDX file
    const { default: BlogContent } = await import(`@/components/content/blog/${slug}.mdx`);

    return (
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogContent />
      </article>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
