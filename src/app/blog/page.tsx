import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  authors: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "introducing-tracer-pt-1",
    title: "Introducing Tracer (Part 1)",
    date: "January 21, 2024",
    description: "We're working in stealth on a new startup called Tracer, and wanted to share more about the product, the journey so far, and the *why* behind it",
    tag: "announcement",
    image: "/images/tracer-DNA-demo.png",
    authors: ["Vincent", "Laura", "Tushar"]
  },
  {
    slug: "introducing-tracer-pt-2",
    title: "Observability For Biology (Part 2)",
    date: "May 27, 2024",
    description: "In this blog post, we discuss the importance of observability in biology.",
    tag: "announcement",
    image: "/images/tracer-blog-part-2.png",
    authors: ["Vincent", "Laura", "Tushar"]
  },
  {
    slug: "experimenting-with-tracer-pt-3",
    title: "Observability For Biology (Part 3)",
    date: "June 12, 2024",
    description: "In this blog post, we used Tracer for real-time analytical insights into ChIP-Seq data.",
    tag: "announcement",
    image: "/images/tracer-blog-3.png",
    authors: ["Vincent", "Laura", "Tushar"]
  },
  {
    slug: "tracer-use-case101",
    title: "Observability For Biology - Real-Time Workflow Debugging Use-Case 101",
    date: "September 08, 2024",
    description: "A use-case tale illustrating how Tracer helps bioinformaticians identify and fix pipeline errors in real-time.",
    tag: "use-case",
    image: "/images/tracer-blog-5.png",
    authors: ["Vincent", "Laura", "Tushar"]
  },
  {
    slug: "tracer-benchmarks",
    title: "Tracer Performance Benchmarks",
    date: "October 15, 2024",
    description: "Detailed performance metrics showing how Tracer optimizes computational workflows in bioinformatics.",
    tag: "technical",
    image: "/images/tracer-benchmarks.png",
    authors: ["Vincent", "Tushar"]
  },
  {
    slug: "tracer-future-roadmap",
    title: "The Future of Tracer: Our 2025 Roadmap",
    date: "November 30, 2024",
    description: "Exploring our upcoming features and integration plans for the Tracer platform.",
    tag: "announcement",
    image: "/images/tracer-roadmap.png",
    authors: ["Laura", "Vincent"]
  }
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen pt-20 py-24 pt-32 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tracer Blog</h1>
      <p className="text-lg mb-12">Latest updates, insights, and announcements from the Tracer team</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    {post.tag}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{post.description}</p>
                <div className="flex items-center mt-auto">
                  <div className="flex -space-x-2">
                    {post.authors.map((author, index) => (
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
                    {post.authors.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
