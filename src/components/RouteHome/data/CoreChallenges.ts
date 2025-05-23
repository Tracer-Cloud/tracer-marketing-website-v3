// Define the type for our challenge data
export interface CoreChallenge {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const challenges: CoreChallenge[] = [
  {
    id: "challenge-1",
    number: "01",
    title: "No visibility into digitalisation",
    description:
      "No structured way to measure ROI, track progress, or identify the areas to double down on AI investments",
    imageUrl: "/home/core-challenge-1.png",
  },
  {
    id: "challenge-2",
    number: "02",
    title: "Lack of cost attribution",
    description:
      "Cloud spend is opaque. Manual tagging is unreliable. Itʼs hard to predict budgets or connect spend to value ",
    imageUrl: "/home/core-challenge-2.png",
  },
  {
    id: "challenge-3",
    number: "03",
    title: "Inefficient tools",
    description:
      "Legacy systems lack the insights needed to debug, optimize, or even pinpoint performance bottlenecks",
    imageUrl: "/home/core-challenge-3.png",
  },
  {
    id: "challenge-4",
    number: "04",
    title: "Information lost between teams",
    description:
      "Metadata and crucial context get lost during handovers—leading to confusion, rework, and slower collaboration",
    imageUrl: "/home/core-challenge-4.png",
  },
];
