const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black"
    >
      <h1 className="text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#75824a]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
};

export default About;
