import Link from "next/link";
import Image from "next/image";
import fs from 'fs';
import path from 'path';

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
};

export default async function BlogPage() {
  // Get all MDX files from the content directory
  const contentDir = path.join(process.cwd(), 'src/components/content/blog');
  const files = fs.readdirSync(contentDir);
  const mdxFiles = files.filter(file => 
    file.endsWith('.mdx') && !file.startsWith('_')
  );
  
  // Get metadata from each MDX file using dynamic import
  const postsPromises = mdxFiles.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    
    try {
      // Import the MDX file to get its exported metadata
      const postModule = await import(`@/components/content/blog/${slug}.mdx`);
      
      // Get metadata with defaults for required fields
      const metadata = {
        title: postModule.metadata?.title || 'Untitled',
        date: postModule.metadata?.date || new Date().toISOString(),
        description: postModule.metadata?.description || '',
        tag: postModule.metadata?.tag,
        ogImage: postModule.metadata?.ogImage,
        author: postModule.metadata?.author
      };
      
      return {
        slug,
        metadata,
      } as BlogPost;
    } catch (importError) {
      console.error(`Error importing ${slug}.mdx:`, importError);
      return null;
    }
  });
  
  // Wait for all imports to complete
  const postsWithNull = await Promise.all(postsPromises);
  const posts = postsWithNull.filter(Boolean) as BlogPost[];
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });

  return (
    <main className="w-full min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tracer Blog</h1>
      <p className="text-lg mb-12">Latest updates, insights, and announcements from the Tracer team</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          // Convert author to array
          const authors = post.metadata.author ? 
            (typeof post.metadata.author === 'string' ? 
              post.metadata.author.split(/,\s*and\s*|,\s*|\s+and\s+/).map(a => a.trim()) : 
              post.metadata.author) : 
            [];
          
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.metadata.ogImage || '/images/default-blog.png'} 
                    alt={post.metadata.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                      {post.metadata.tag || 'general'}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{post.metadata.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.metadata.title}</h2>
                  <p className="text-gray-600 mb-4 flex-1">{post.metadata.description}</p>
                  {authors.length > 0 && (
                    <div className="flex items-center mt-auto">
                      <div className="flex -space-x-2">
                        {authors.map((author, index) => (
                          <div 
                            key={index} 
                            className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium border-2 border-white"
                            title={author}
                          >
                            {author.charAt(0)}
                          </div>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {authors.join(", ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}



