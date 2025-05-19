import Link from "next/link";
import Image from "next/image";

type ResourceItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image: string;
  type: "whitepaper" | "case-study" | "webinar" | "guide" | "report" | "infographic";
};

const resourceItems: ResourceItem[] = [
  {
    slug: "enterprise-observability-guide",
    title: "The Complete Guide to Enterprise Observability",
    date: "February 15, 2024",
    description: "Learn how enterprise observability transforms HPC environments and enables data-driven decision making across your organization.",
    category: "Guide",
    image: "/images/resources/enterprise-observability.jpg",
    type: "guide"
  },
  {
    slug: "pharma-case-study",
    title: "Case Study: How a Top 10 Pharma Company Reduced Pipeline Runtime by 68%",
    date: "March 22, 2024",
    description: "Discover how a leading pharmaceutical company implemented Tracer to optimize their bioinformatics workflows and accelerate drug discovery.",
    category: "Case Study",
    image: "/images/resources/pharma-case-study.jpg",
    type: "case-study"
  },
  {
    slug: "hpc-monitoring-whitepaper",
    title: "The Future of HPC Monitoring: Beyond Traditional Metrics",
    date: "April 10, 2024",
    description: "This whitepaper explores how next-generation observability platforms are revolutionizing high-performance computing environments.",
    category: "Whitepaper",
    image: "/images/resources/hpc-monitoring.jpg",
    type: "whitepaper"
  },
  {
    slug: "observability-roi-calculator",
    title: "Enterprise Observability ROI Calculator",
    date: "May 5, 2024",
    description: "Use our interactive tool to calculate the potential return on investment from implementing enterprise-grade observability in your organization.",
    category: "Tool",
    image: "/images/resources/roi-calculator.jpg",
    type: "guide"
  },
  {
    slug: "webinar-real-time-analytics",
    title: "Webinar: Real-time Analytics for Scientific Computing",
    date: "June 18, 2024",
    description: "Join our experts as they demonstrate how real-time analytics can transform scientific computing workflows and accelerate research outcomes.",
    category: "Webinar",
    image: "/images/resources/webinar-analytics.jpg",
    type: "webinar"
  },
  {
    slug: "state-of-enterprise-observability-2024",
    title: "State of Enterprise Observability 2024 Report",
    date: "July 3, 2024",
    description: "Our comprehensive annual report on the current state and future trends of enterprise observability across regulated industries.",
    category: "Report",
    image: "/images/resources/state-report-2024.jpg",
    type: "report"
  }
];

export default function ResourcesPage() {
  return (
    <main className="w-full min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-4">Enterprise Observability Resources</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Explore our collection of guides, case studies, whitepapers, and tools to help you implement 
          and optimize enterprise observability in your high-performance computing environment.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full">All Resources</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">Whitepapers</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">Case Studies</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">Webinars</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">Guides</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceItems.map((resource) => (
            <Link href={`/resources/${resource.slug}`} key={resource.slug}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <div className="absolute top-0 right-0 z-10 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                    {resource.category}
                  </div>
                  <Image 
                    src={resource.image} 
                    alt={resource.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {resource.type === "whitepaper" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {resource.type === "case-study" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {resource.type === "webinar" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                      {resource.type === "guide" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {resource.type === "report" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {resource.type === "infographic" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      )}
                      <span className="text-sm text-gray-600">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                    </div>
                    <span className="text-gray-500 text-sm ml-auto">{resource.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                  <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      Access Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Load More Resources
          </button>
        </div>
      </div>
    </main>
  );
}
