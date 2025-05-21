"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PreLoaderProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 25);
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) {
    return null;
  }

  return (
    <div className="hidden fixed inset-0 z-[9999] flex h-screen items-center justify-center bg-white bg-[url(/images/not-found-page/bg-lines.svg)] bg-contain bg-center bg-repeat-y text-gray-900">
      <div className="font-chakra-petch text-sm font-normal uppercase tracking-[-0.01em] md:text-base">
        [{progress}%]
      </div>

      <div className="mt-6 flex flex-col items-center">
        <Image
          src="/shared/tracer-logo-black.png"
          alt="Tracer Logo"
          width={123}
          height={29}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 pb-4"
        />
      </div>
    </div>
  );
};

export default PreLoaderProgress;
