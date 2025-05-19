export interface InfraItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const infraData: InfraItem[] = [
  {
    id: "001",
    image: "/home/infare-ass.png",
    title: "Computational Infrastructure Assessment",
    description:
      "Gain full-stack visibility into the efficiency of your AI and computational biology workflows focusing on usage, computational bottlenecks, costs, and speed. Assess which workloads do not run at peak efficiency",
  },
  {
    id: "002",
    image: "/home/failure-inf.png",
    title: "Failure Presention Assessment",
    description:
      "Assess pipeline failures and their root causes across your entire infrastructure. Understand where disruptions occur and how to solve them at scale",
  },
];
