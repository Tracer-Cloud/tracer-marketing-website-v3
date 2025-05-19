import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CareersPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center my-10">

          <motion.section className="mb-4" {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">We&apos;re Expanding Our Team!</h2>
            <p className="text-justify">
              With VC-backed money in the bank, we are hiring ambitious and hard-working individuals across the board to fast-track our growth. This is your chance to join our team in London, UK and architect the future of scientific computing, improving the lives of patients.
            </p>


            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="my-5 mx-auto block">
                <Link href="https://jobs.ashbyhq.com/tracer">
                  View Role Details & Apply Now ↗
                </Link>
              </Button>
            </motion.div>

          </motion.section>

          <motion.section className="mb-12" {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold mb-4 mt-0">Our Culture</h2>
            <ul className="list-none pl-6 mt-2 text-left space-y-2">
              {[
                "🔥 Passion is the most important thing and all other things follow. It is important to work on things that we deeply care about",
                "🧠 Discuss the brutal facts and together we will solve with intelligence",
                "🚀 Fun & Fearlessness: It is more fun and exciting to work on epic problems",
                "⚖️ Work really hard. But live a life worth living (take time off and go on epic holidays)",
                "🏆 We are a meritocracy and model ourselves on being a professional sports team",
                "🧪 Experiment a lot in the pursuit of truth",
                "🧘‍♀️ Take care of your personal wellbeing"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>




          <motion.section className="mb-8" {...fadeInUp} transition={{ delay: 0.4 }}>

            <h2 className="text-2xl font-semibold mb-4 mt-12">Let&apos;s Connect!</h2>
            <p className="text-justify">
              Ready to help shape the future of high-performance computing? We want to hear from you!
            </p>
            <p className="my-4">
              <a href="mailto:careers@tracer.cloud" className="decoration-blue-500 hover:decoration-blue-700 underline underline-offset-4 transition-colors duration-300">careers@tracer.cloud</a>
            </p>
            <p className="mt-2">
              Join us in our mission to unlock the full potential of HPC and help usher in a new era of scientific breakthroughs!
            </p>

          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;