import React from "react";
import { motion } from "framer-motion";

interface Assumption {
  label: string;
  value: number | string;
  unit?: string;
}

const CalculatorMain: React.FC = () => {
  const assumptions: Assumption[] = [
    { label: "Monthly pipeline runs", value: 100000 },
    { label: "% crashing pipelines", value: 5, unit: "%" },
    { label: "Hours to review and debug pipelines", value: 1.7, unit: "hrs" },
    {
      label: "Average hourly salary of scientist",
      value: 77,
      unit: "$ / hour",
    },
    { label: "Reduction in debugging time with Tracer", value: 75, unit: "%" },
    { label: "Productivity recapture", value: 50, unit: "%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-black rounded-xs text-white border border-gray-600 my-4 sm:my-8"
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Total Economic Impact <br className="hidden sm:inline" />
        of Observability in Scientific HPC Workloads
      </h1>
      <p className="text-xs sm:text-sm text-center mb-4 sm:mb-6 text-gray-400">
        Unlock potential savings with Tracer Bioinformatics Observability
      </p>

      <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {assumptions.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-3 py-2 rounded border border-gray-600 flex flex-col justify-between h-full"
          >
            <div className="text-xs sm:text-sm text-gray-400">{item.label}</div>
            <div className="text-sm sm:text-base font-bold mt-auto">
              {item.unit && item.unit.startsWith("$") ? "$" : ""}
              {typeof item.value === "number"
                ? item.value.toLocaleString()
                : item.value}
              {item.unit && !item.unit.startsWith("$") ? ` ${item.unit}` : ""}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-4 sm:mb-6 p-2 sm:p-3 rounded border border-gray-600 overflow-x-auto text-xs sm:text-sm">
        <div className="flex justify-between items-center text-gray-400">
          {assumptions.map((item, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap">
                {typeof item.value === "number"
                  ? item.value.toLocaleString()
                  : (
                    parseFloat(item.value.replace("%", "")) / 100
                  ).toLocaleString()}
                {item.unit && ` ${item.unit}`}
              </span>
              {index < assumptions.length - 1 && (
                <span className="mx-1">×</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-600 flex justify-between items-center">
        <span className="text-xs sm:text-sm text-gray-400">
          Estimated Annual Cost Savings
        </span>
        <span className="text-xl sm:text-2xl font-bold">
          ${(2900000).toLocaleString()}
        </span>
      </div>

      <div className="mt-4 sm:mt-6 text-left text-xs sm:text-sm text-gray-400">
        Tracer&apos;s reduction in error resolution creates c.$
        {(2900000).toLocaleString()} annual efficiency savings for a composite mid market enterprise in lifesciences
      </div>
    </motion.div>
  );
};

export default CalculatorMain;
