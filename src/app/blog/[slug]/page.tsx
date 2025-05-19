import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/components/content/blog'));
  const mdxFiles = files.filter(filename => filename.endsWith('.mdx') && !filename.startsWith('_'));
  
  return mdxFiles.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/components/content/blog', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [data.ogImage],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/components/content/blog', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <MDXRemote source={content} />
    </div>
  );
}