// data/insightsData.ts
export interface InsightItem {
  id: number;
  range: string;
  title: string;
  heading: string;
  description: string;
  mt?: string; // optional for margin top
}

export const insightsData: InsightItem[] = [
  {
    id: 1,
    range: "01–03",
    title: "TRACER PERFORMANCE",
    heading: "Predict and optimize compute requirements",
    description:
      "Forecast the exact running time and compute needs of your pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner",
    mt: " md:mt-0",
  },
  {
    id: 2,
    range: "02–03",
    title: "TRACER INTELLIGENCE",
    heading: "Total Visibility into Computational Infrastructure",
    description:
      "Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelized processes across instances",
    mt: " md:mt-[227px] lg:mt-[300px]",
  },
  {
    id: 3,
    range: "03–03",
    title: "TRACER debug",
    heading: "Fix issues instantly",
    description:
      "Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly",
    mt: " md:mt-[454px] lg:mt-[600px]",
  },
];
