interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface DataItem {
  icon: string;
  title: string;
  description: string;
  logos?: Logo[];
}

export const DataStaysMobileData: DataItem[] = [
  {
    icon: "/technology/foldericon.svg",
    title: "Data stays in your hands",
    description: "Unlike SaaS-based solutions, Tracer never exports data",
  },
  {
    icon: "/technology/designed.svg",
    title: "Designed for regulated industries",
    description:
      "Engineered with US DoD, HIPAA, GxP, and GDPR-compliant technologies from the ground up",
    logos: [
      {
        src: "/technology/hippa.svg",
        alt: "HIPAA",
        width: 82,
        height: 42,
      },
      {
        src: "/technology/gdpr.svg",
        alt: "GDPR",
        width: 48,
        height: 48,
      },
      {
        src: "/technology/dod.webp",
        alt: "DoD",
        width: 48,
        height: 48,
      },
    ],
  },
  {
    icon: "/technology/opensource.svg",
    title: "Open Source",
    description: "Transparency and extensibility at every layer",
  },
  {
    icon: "/technology/engineered.svg",
    title: "Engineered in Rust",
    description: "The safest, most performant systems language ever built",
  },
];
