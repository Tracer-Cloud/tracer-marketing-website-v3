export type Industry = {
  id: number;
  image: string;
  alt: string;
  title: string;
  mdWidth: string;
  mdHeight: string;
};

export const industryData: Industry[] = [
  {
    id: 1,
    image: "/platform/automotive.webp",
    alt: "automotive-img",
    title: "Automotive",
    mdWidth: "md:w-[16.47%]",
    mdHeight: "md:h-[170px] xl:h-[382px]",
  },
  {
    id: 2,
    image: "/platform/computational.webp",
    alt: "computational-img",
    title: "Computational Fluid Dynamic",
    mdWidth: "md:w-[19.07%]",
    mdHeight: "md:h-[90px] xl:h-[172px]",
  },
  {
    id: 3,
    image: "/platform/pharm.webp",
    alt: "pharm-img",
    title: "Pharma & Biotech",
    mdWidth: "md:w-[27.82%]",
    mdHeight: "md:h-[280px] xl:h-[550px]",
  },
  {
    id: 4,
    image: "/platform/aerospace.webp",
    alt: "aerospace-img",
    title: "Aerospace",
    mdWidth: "md:w-[36.63%]",
    mdHeight: "md:h-[170px] xl:h-[332px]",
  },
];
