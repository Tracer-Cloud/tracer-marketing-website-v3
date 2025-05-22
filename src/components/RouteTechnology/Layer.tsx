import React from 'react'
import Image from 'next/image'

function Layer() {
  return (
    <div>
      <div className="flex flex-col md:hidden">
        <div
          className="h-10 w-[80%] bg-[#1f1f1f] md:w-[250px] lg:h-20 xl:w-[309px]"
        />
        <div className="flex h-80 w-full items-center justify-center bg-[#1f1f1f] md:w-[320px] xl:w-[393px]">
          <div className="z-10 w-[25rem] border border-gray-300 bg-white p-2">
            <span className="text-md text-[#202020]">
              Understanding highly parallelised workloads running on distributed
              supercomputers is very difficult. Tracer combines cutting-edge
              technological advances with the deep understanding of scientific
              industries to go from a black box to insights.
            </span>
          </div>
        </div>

      </div>
      <div className="mx-auto bg-[#1f1f1f] p-4 py-20">
        <p className="font-chakra-petch pb-10 uppercase text-[#fcfcfc]">
          _Four layers to make this happen
        </p>
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="hidden w-full md:block md:w-1/2">
            <Image src="/technology/layer-222.png" alt="LayerImg" width={600} height={800} />
          </div>
          <div className="block w-full md:hidden md:w-1/2">
            <Image src="/technology/layer-mobile.png" alt="LayerImg" width={400} height={600} className='h-96 sm:h-auto' />
          </div>
          <div className="mt-10 w-full md:w-1/2">
            <div className="h-auto max-w-[480px] xl:h-screen">
              <span className="font-chakra-petch text-white">LAYER 001</span>
              <div className="flex flex-col gap-2">
                <h2 className="pt-8 text-[32px] text-white md:text-[56px]">Extraction layer</h2>
                <span className="text-white">
                  Linux-based connectors written in Rust extract information
                  straight from the operating system OS. With the newest
                  technologies such as eBPF, we ensure very low overhead at 2%
                  while keeping extreme speed. OS-level connection ensures deeper
                  visibility compared to application-connectors.
                </span>
                <div>
                  <div className="mt-4 border border-[#404040] p-3 text-white">
                    <span>
                      Unprecedented information gathering while bypassing terrible
                      logging and incomplete information
                    </span>
                  </div>
                  <div className="h-[10px] bg-white"></div>
                  <div className="flex h-[10px] w-[80%] justify-self-end bg-white"></div>
                </div>
              </div>
            </div>
            <div className="mt-32 h-auto max-w-[480px] xl:mt-0 xl:h-screen">
              <span className="font-chakra-petch text-white">LAYER 002</span>
              <div className="flex flex-col gap-2">
                <h2 className="pt-8 text-[32px] text-white md:text-[56px]">Filter layers</h2>
                <span className="text-white">
                  Science-specific information about the tools, frameworks, and
                  files are automatically recognised and extracted. The filter
                  takes into account the deep technical and scientific information
                  required for actionable insights compared to generic
                  observability outputs
                </span>
                <div>
                  <div className="mt-4 border border-[#404040] p-3 text-white">
                    <span>
                      Filter focused on science-specific pipeline information,
                      differing from other observability solutions
                    </span>
                  </div>
                  <div className="h-[10px] bg-white"></div>
                  <div className="flex h-[10px] w-[80%] justify-self-end bg-white"></div>
                </div>
              </div>
            </div>
            <div className="mt-32 h-auto xl:mt-0 xl:h-screen">
              <span className="font-chakra-petch text-white">LAYER 003</span>
              <div className="flex flex-col gap-2">
                <h2 className="max-w-[500px] pt-8 text-[32px] text-white md:text-[53px] md:leading-[1.1]">
                  Transformation Layer
                </h2>
                <span className="max-w-[480px] text-white">
                  Extracted and filtered information is transformed into Open
                  Telemetry format, the latest standard for observability
                  practices. Pioneering an approach called &quot;synthetic log
                  generation&quot;, Tracer creates logs where there was nothing before.
                </span>
                <div className='max-w-[480px]'>
                  <div className="mt-4 border border-[#404040] p-3 text-white">
                    <span>
                      Synthetic log generation in OTel format for ultimate
                      flexibility and understanding
                    </span>
                  </div>
                  <div className="h-[10px] bg-white"></div>
                  <div className="flex h-[10px] w-[80%] justify-self-end bg-white"></div>
                </div>
              </div>
            </div>
            <div className="mt-32 max-w-[480px] md:mt-0">
              <span className="font-chakra-petch text-white">LAYER 004</span>
              <div className="flex flex-col gap-2">
                <h2 className="pt-8 text-[32px] text-white md:text-[56px]">Insights layer</h2>
                <span className="text-white">
                  We implement AI and other predictive technologies on top of the
                  generated information for fast error resolution, cost reduction,
                  and speed improvements. This layer consists of different
                  applications on top of our data lake of pipeline information for
                  all levels across the enterprise, for scientist, engineers and
                  executives.
                </span>
                <div>
                  <div className="mt-4 border border-[#404040] p-3 text-white">
                    <span>
                      Information turned into insights for all layers of the
                      organisation
                    </span>
                  </div>
                  <div className="h-[10px] bg-white"></div>
                  <div className="flex h-[10px] w-[80%] justify-self-end bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layer
