// data/layersData.ts

export const defaultLayersData = [
  {
    id: "001",
    title: "Extraction Layer",
    description:
      "Linux-based connectors written in Rust extract information straight from the operating system OS. With the newest technologies such as eBPF, we ensure very low overhead at 2% while keeping extreme speed. OS-level connection ensures deeper visibility compared to application-connectors.",
    additionalInfo:
      "Unprecedented information gathering while bypassing terrible logging and incomplete information",
  },
  {
    id: "002",
    title: "Filter Layers",
    description:
      "Science-specific information about the tools, frameworks, and files are automatically recognised and extracted. The filter takes into account the deep technical and scientific information required for actionable insights compared to generic observability outputs",
    additionalInfo:
      "Filter focused on science-specific pipeline information, differing from other observability solutions",
  },
  {
    id: "003",
    title: "Transformation Layer",
    description:
      'Extracted and filtered information is transformed into Open Telemetry format, the latest standard for observability practices. Pioneering an approach called "synthetic log generation", Tracer creates logs where there was nothing before.',
    additionalInfo:
      "Synthetic log generation in OTel format for ultimate flexibility and understanding",
  },
  {
    id: "004",
    title: "Insights Layer",
    description:
      "We implement AI and other predictive technologies on top of the generated information for fast error resolution, cost reduction, and speed improvements. This layer consists of different applications on top of our data lake of pipeline information for all levels across the enterprise, for scientist, engineers and executives.",
    additionalInfo:
      "Information turned into insights for all layers of the organisation",
  },
];
