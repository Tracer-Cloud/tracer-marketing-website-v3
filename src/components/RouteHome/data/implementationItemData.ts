export type ImplementationItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  mdWidth: number;
  mdHeight: number;
} | null;

export const implementationData: ImplementationItem[] = [
  null,
  null,
  null,
  null,
  {
    src: "/platform/imp-bash.svg",
    alt: "imp-bash",
    width: 60,
    height: 24,
    mdWidth: 111,
    mdHeight: 47,
  },
  {
    src: "/platform/impl-2.svg",
    alt: "impl-2",
    width: 47,
    height: 58,
    mdWidth: 76,
    mdHeight: 94,
  },
  {
    src: "/platform/impl-3.svg",
    alt: "impl-3",
    width: 49,
    height: 23,
    mdWidth: 126,
    mdHeight: 49,
  },
  {
    src: "/platform/impl-4.svg",
    alt: "impl-4",
    width: 45,
    height: 27,
    mdWidth: 88,
    mdHeight: 52,
  },
  {
    src: "/platform/impl-5.svg",
    alt: "impl-5",
    width: 64,
    height: 13,
    mdWidth: 124,
    mdHeight: 25,
  },
  null,
  null,
  {
    src: "/platform/impl-6.svg",
    alt: "impl-6",
    width: 60,
    height: 32,
    mdWidth: 113,
    mdHeight: 64,
  },
];
