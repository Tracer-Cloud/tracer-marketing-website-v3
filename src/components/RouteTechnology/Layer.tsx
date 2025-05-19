import React from 'react'
import Image from 'next/image'

function Layer() {
  return (
    <div>
      <div className="flex md:hidden flex-col">
        <div
          className="w-[80%] md:w-[250px] xl:w-[309px] h-10 lg:h-20 bg-[#1f1f1f]"
        />
        <div className="w-full md:w-[320px] xl:w-[393px] h-80 bg-[#1f1f1f] flex items-center justify-center">
          <div className="w-[25rem] border border-gray-300 p-2 bg-white z-10">
            <span className="text-md text-[#202020]">
              Understanding highly parallelised workloads running on distributed
              supercomputers is very difficult. Tracer combines cutting-edge
              technological advances with the deep understanding of scientific
              industries to go from a black box to insights.
            </span>
          </div>
        </div>

      </div>
      <div className="bg-[#1f1f1f] p-4 py-20 mx-auto">
        <p className="uppercase pb-10 text-[#fcfcfc] chakra-petch">
          _Four layers to make this happen
        </p>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="hidden md:block w-full md:w-1/2">
            <Image src="/technology/layer.png" alt="LayerImg" width={600} height={800} />
          </div>
          <div className="block md:hidden w-full md:w-1/2">
            <Image src="/technology/layer-mobile.png" alt="LayerImg" width={400} height={600} className='h-96 sm:h-auto'/>
          </div>
          <div className="w-full md:w-1/2 mt-10">
            <div className="h-auto xl:h-screen max-w-[480px]">
              <span className="chakra-petch text-white">LAYER 001</span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] md:text-[56px] text-white pt-8">Extraction Layer</h2>
                <span className="text-white">
                  Linux-based connectors written in Rust extract information
                  straight from the operating system OS. With the newest
                  technologies such as eBPF, we ensure very low overhead at 2%
                  while keeping extreme speed. OS-level connection ensures deeper
                  visibility compared to application-connectors.
                </span>
                <div>
                  <div className="border p-3 text-white border-[#404040] mt-4">
                    <span>
                      Unprecedented information gathering while bypassing terrible
                      logging and incomplete information
                    </span>
                  </div>
                  <div className="bg-white h-[10px]"></div>
                  <div className="bg-white w-[80%] flex justify-self-end h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="h-auto xl:h-screen max-w-[480px] mt-32 xl:mt-0">
              <span className="chakra-petch text-white">LAYER 002</span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] md:text-[56px] text-white pt-8">Filter Layers</h2>
                <span className="text-white">
                  Science-specific information about the tools, frameworks, and
                  files are automatically recognised and extracted. The filter
                  takes into account the deep technical and scientific information
                  required for actionable insights compared to generic
                  observability outputs
                </span>
                <div>
                  <div className="border p-3 text-white border-[#404040] mt-4">
                    <span>
                      Filter focused on science-specific pipeline information,
                      differing from other observability solutions
                    </span>
                  </div>
                  <div className="bg-white h-[10px]"></div>
                  <div className="bg-white w-[80%] flex justify-self-end h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="h-auto xl:h-screen max-w-[480px] mt-32 xl:mt-0">
              <span className="chakra-petch text-white">LAYER 003</span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] md:text-[56px] text-white pt-8">
                  Transformation Layer
                </h2>
                <span className="text-white">
                  Extracted and filtered information is transformed into Open
                  Telemetry format, the latest standard for observability
                  practices. Pioneering an approach called &quot;synthetic log
                  generation&quot;, Tracer creates logs where there was nothing before.
                </span>
                <div>
                  <div className="border p-3 text-white border-[#404040] mt-4">
                    <span>
                      Synthetic log generation in OTel format for ultimate
                      flexibility and understanding
                    </span>
                  </div>
                  <div className="bg-white h-[10px]"></div>
                  <div className="bg-white w-[80%] flex justify-self-end h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="max-w-[480px] mt-32 md:mt-0">
              <span className="chakra-petch text-white">LAYER 004</span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] md:text-[56px] text-white pt-8">Insights Layer</h2>
                <span className="text-white">
                  We implement AI and other predictive technologies on top of the
                  generated information for fast error resolution, cost reduction,
                  and speed improvements. This layer consists of different
                  applications on top of our data lake of pipeline information for
                  all levels across the enterprise, for scientist, engineers and
                  executives.
                </span>
                <div>
                  <div className="border p-3 text-white border-[#404040] mt-4">
                    <span>
                      Information turned into insights for all layers of the
                      organisation
                    </span>
                  </div>
                  <div className="bg-white h-[10px]"></div>
                  <div className="bg-white w-[80%] flex justify-self-end h-[10px]"></div>
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
