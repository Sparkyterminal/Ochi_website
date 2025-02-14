import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full bg-zinc-900 h-screen pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye opening", "presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-[5vw] bg-zinc-900 relative mt-3 rounded-md"
                ></motion.div>
              )}
              <h1 className=" flex items-center h-full uppercase text-8xl leading-[6vw] tracking-tighter font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "from the first pitch to IPO",
          ].map((item, index) => (
            <p
              className="text-md font-light leading-none"
              key={index}
              id="text"
            >
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
              start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
