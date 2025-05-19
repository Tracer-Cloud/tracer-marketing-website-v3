import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/components/content/blog'));
  const mdxFiles = files.filter(filename => filename.endsWith('.mdx') && !filename.startsWith('_'));
  
  return mdxFiles.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  
  try {
    // Dynamically import the MDX file to get its metadata
    const module = await import(`@/components/content/blog/${slug}.mdx`);
    const metadata = module.metadata || {};
    
    return {
      title: metadata.title || 'Blog Post',
      description: metadata.description,
      openGraph: metadata.ogImage ? {
        images: [metadata.ogImage],
      } : undefined,
    };
  } catch (error) {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

// Render the blog post
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  try {
    // Dynamically import the MDX component
    const BlogContent = (await import(`@/components/content/blog/${slug}.mdx`)).default;
    
    return (
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogContent />
      </article>
    );
  } catch (error) {
    notFound();
  }
}
