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

    // For hardcoded test posts, return static metadata
    if (slug === 'test-post-1') {
      return {
        title: 'Test Post 1',
        description: 'Description for test post 1',
        openGraph: {
          images: ['https://example.com/image1.png'],
        },
      };
    }

    if (slug === 'test-post-2') {
      return {
        title: 'Test Post 2',
        description: 'Description for test post 2',
        openGraph: {
          images: ['https://example.com/image2.png'],
        },
      };
    }

    // For other posts, try to import the MDX file
    try {
      const { metadata } = await import(`@/components/content/blog/${slug}.mdx`);

      return {
        title: metadata?.title || 'Blog Post',
        description: metadata?.description || '',
        openGraph: metadata?.ogImage
          ? { images: [metadata.ogImage] }
          : undefined,
      };
    } catch (importError) {
      console.error(`Error importing MDX for metadata: ${slug}.mdx`, importError);
      return { title: 'Blog Post' };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: 'Blog Post Not Found' };
  }
}

// Import the static content component
import StaticContent from './static-content';

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

    // Use the static content component
    return (
      <article className="max-w-4xl mx-auto px-4 py-12">
        <StaticContent slug={slug} />
      </article>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
