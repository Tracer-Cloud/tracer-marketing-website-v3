import Link from "next/link";
import Image from "next/image";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type BlogPost = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
};

export default function BlogPage() {
  // Get all MDX files from the blog directory
  const blogDir = path.join(process.cwd(), 'src/app/blog');
  const files = fs.readdirSync(blogDir);
  const mdxFiles = files.filter(file => 
    file.endsWith('.mdx') && !file.startsWith('_') && file !== 'page.mdx'
  );
  
  // Parse frontmatter from each MDX file
  const posts = mdxFiles.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(blogDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    // Ensure the frontMatter has the required properties
    const frontMatter = {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      tag: data.tag,
      ogImage: data.ogImage,
      author: data.author
    };
    
    return {
      slug,
      frontMatter,
    } as BlogPost;
  });
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
  });

  return (
    <main className="w-full min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tracer Blog</h1>
      <p className="text-lg mb-12">Latest updates, insights, and announcements from the Tracer team</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          // Convert author to array
          const authors = post.frontMatter.author ? 
            (typeof post.frontMatter.author === 'string' ? 
              post.frontMatter.author.split(/,\s*and\s*|,\s*|\s+and\s+/).map(a => a.trim()) : 
              post.frontMatter.author) : 
            [];
          
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.frontMatter.ogImage || '/images/default-blog.png'} 
                    alt={post.frontMatter.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                      {post.frontMatter.tag || 'general'}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{post.frontMatter.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.frontMatter.title}</h2>
                  <p className="text-gray-600 mb-4 flex-1">{post.frontMatter.description}</p>
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



