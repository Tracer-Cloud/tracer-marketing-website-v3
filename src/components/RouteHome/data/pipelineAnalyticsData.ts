export interface PipelineCard {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const pipelineAnalyticsData: (PipelineCard | null)[] = [
  {
    icon: "/icons/platform/computer.svg",
    alt: "computer",
    title: "Compute Requirement Predictor",
    description:
      "Accurately predict how much CPU, RAM, and memory any pipeline needs for any file size and tools",
  },
  {
    icon: "/icons/platform/computer-setting.svg",
    alt: "computer-setting",
    title: "Bottleneck center",
    description:
      "Review the compute bottlenecks across your organisation, recognizing underutlized instances, slow tools, and low performance",
  },
  {
    icon: "/icons/platform/eye-pipeline.svg",
    alt: "eye-pipeline",
    title: "Democratize pipeline knowledge",
    description: "Review when your pipeline will finish",
  },
  null, // Empty div placeholder
  null, // Empty div placeholder
  {
    icon: "/icons/platform/calculator.svg",
    alt: "calculator",
    title: "Runtime Calculator",
    description:
      "Share real-time pipeline status with all team member for ultimate visibility",
  },
  null, // Empty div placeholder
  {
    icon: "/icons/platform/cloud.svg",
    alt: "cloud",
    title: "Cloud Cost Dashboard",
    description:
      "Review where your cloud costs are coming from - across department to sub-tool level and everything in between",
  },
  {
    icon: "/icons/platform/camera-ph.svg",
    alt: "camera",
    title: "System of record",
    description:
      "Know what analysis you did, yesterday, last month, and years back",
  },
];
