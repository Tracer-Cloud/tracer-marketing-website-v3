
export default function AboutPage() {
  return (
    <main className="w-full bg-black text-white min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Company</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Tracer</h2>
        <p className="mb-4">
          Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimize supercomputing software solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Moonshot</h2>
        <p className="mb-4">
          Just as cloud computing revolutionized web and mobile applications over the past 10 years, we believe it&apos;s time for scientists and engineers to experience a similar transformation, and get their turn to ask: &quot;what can I do with all this immense power?&quot;
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Best of Two Worlds</h2>
        <p className="mb-4">
          Founded in 2023 by Vincent Hus and Laura Bogaert, Tracer combines deep technical expertise with sharp business acumen. Vincent, an expert in software and biomechanical engineering, and Laura, a McKinsey alum specializing in bioinformatics and pharma, are the perfect storm of innovation. Together they joined forces to drive the next wave of computational infrastructure and create the world&apos;s first verticalized observability platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transforming High-Tech Industries</h2>
        <p className="mb-4">
          We started in bioinformatics, but quickly realized our technology is the skeleton key for unlocking efficiency across all HPC environments. We&apos;re not just improving existing systems; we&apos;re accelerating entire industries:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Life Sciences:</strong> Accelerating R&D and enabling digital drug discovery</li>
          <li><strong>Aerospace:</strong> Optimizing aerodynamics and propulsion for advanced designs</li>
          <li><strong>Semiconductors:</strong> Advancing chip architecture and manufacturing processes</li>
          <li><strong>Automotive:</strong> Enhancing vehicle performance, safety, and innovation</li>
          <li><strong>Manufacturing:</strong> Streamlining product development and production efficiencies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Impossible? Not If We Do It Together!</h2>
        <p className="mb-4">
          The next decade will see computational power do for physical sciences what the internet did for information. At Tracer, we&apos;re not just observers of this change – we&apos;re the catalysts. We&apos;re on the lookout for bold, brilliant minds who aren&apos;t afraid to challenge the status quo and push the boundaries of what&apos;s possible.
        </p>
      </section>
    </main>
  );
}
