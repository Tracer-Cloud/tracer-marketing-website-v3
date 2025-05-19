export interface UnifiedPlatformItem {
  id: string;
  label: string;
  title: string;
  description: string;
  marginTop?: string;
  imageSrc?: string;
  imagePosition?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const unifiedPlatformData: UnifiedPlatformItem[] = [
  {
    id: "tracer-intelligence",
    label: "_Tracer Intelligence",
    title: "Total Visibility into Computational Infrastructure",
    description:
      "Gain real-time, granular insights into every workload and process, independent of coding language, cloud structure or location",
    marginTop: "lg:mt-[240px]",
    imageSrc: "/home/line-35.svg",
    imagePosition: "absolute bottom-[-105px] left-[-1px]",
    imageWidth: 323,
    imageHeight: 104,
  },
  {
    id: "tracer-performance",
    label: "_Tracer Performance",
    title: "Predict and optimize compute requirements",
    description:
      "Forecast the exact running time and compute needs of pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner",
    imageSrc: "/home/line-52.svg",
    marginTop: "lg:mt-[180px]",
    imagePosition: "absolute bottom-[-102px] left-[-1px]",
    imageWidth: 93,
    imageHeight: 104,
  },
  {
    id: "tracer-debug",
    label: "_Tracer Debug",
    title: "Fix issues Instantly",
    description:
      "Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly",
    marginTop: "lg:mt-[240px] lg:ml-[30px]",
    imageSrc: "/home/line-54.svg",
    imagePosition: "absolute bottom-[-192px] left-[-172px]",
    imageWidth: 173,
    imageHeight: 193,
  },
];

export type UnifiedCardData = {
  id: string;
  tag: string;
  title: string;
  description: string;
  lineImage: string;
  containerStyle: string;
  lineImageStyle: string;
};

export const unifiedCardDataLg: UnifiedCardData[] = [
  {
    id: "intelligence",
    tag: "_Tracer Intelligence",
    title: "Total Visibility into Computational Infrastructure",
    description:
      "Gain real-time, granular insights into every workload and process, independent of coding language, cloud structure or location",
    lineImage: "/home/line-35.svg",
    containerStyle: "absolute left-4 top-[150px] xl:left-[35px] xl:top-[210px]",
    lineImageStyle:
      "absolute bottom-[-77px] left-[-1px] z-30 xl:bottom-[-105px] w-[240px] xl:w-[323px]",
  },
  {
    id: "performance",
    tag: "_Tracer Performance",
    title: "Predict and optimize compute requirements",
    description:
      "Forecast the exact running time and compute needs of pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner",
    lineImage: "/home/line-52.svg",
    containerStyle:
      "absolute left-[35%] top-[35px] xl:left-[39%] xl:top-[70px]",
    lineImageStyle: "absolute bottom-[-102px] left-[-1px] z-30 w-[93px]",
  },
  {
    id: "debug",
    tag: "_Tracer Debug",
    title: "Fix issues Instantly",
    description:
      "Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly",
    lineImage: "/home/line-54.svg",
    containerStyle:
      "absolute right-4 top-[155px] xl:right-[4px] xl:top-[130px] [@media(min-width:1380px)]:right-[60px] [@media(min-width:1380px)]:top-[140px]",
    lineImageStyle:
      "absolute bottom-[-160px] left-[-100px] z-30 xl:bottom-[-192px] xl:left-[-172px] h-[160px] w-[100px] xl:h-[193px] xl:w-[173px]",
  },
];
