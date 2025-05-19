export type ScienceCard = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export const scienceCardData: ScienceCard[] = [
  {
    icon: "/icons/platform/setting.svg",
    alt: "setting",
    title: "New Opportunities",
    description:
      "AI’s full potential relies on fast experimentation, achievable only through optimized tooling and precise information",
  },
  {
    icon: "/icons/platform/currency-dollar.svg",
    alt: "dollar",
    title: "New Costs",
    description:
      "AI supercomputing costs are skyrocketing, making efficiency crucial to sustain scientific progress",
  },
  {
    icon: "/icons/platform/arrows-pointing-out.svg",
    alt: "arrows",
    title: "New Scale",
    description:
      "Computational advancements require managing increasingly complex and dynamic computing architectures",
  },
];
