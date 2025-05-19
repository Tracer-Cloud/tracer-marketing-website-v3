export type CloudFeature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const cloudFeatures: CloudFeature[] = [
  {
    id: 1,
    title: "Bring your Own Cloud",
    description: "Totally run on your own cloud systems with minimal overhead",
    icon: "/home/cloud.svg",
  },
  {
    id: 2,
    title: "Secure Data",
    description: "No data or calculations ever leave your systems",
    icon: "/home/lock-closed.svg",
  },
];
