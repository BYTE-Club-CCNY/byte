import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { TextRevealCard } from "./ui/text-reveal-card";

const Eboard = () => {
  const content = [
    {
      title: "Member 1",
      description:
        "Member 1 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the president of the club.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoxOSeZgEPWt_2ALxGfXntM1lluajVUDWoh_W3m42kQ&s"
            width={100}
            height={100}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Member 2",
      description:
        "Member 2 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the vice president of the club.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi744a-tStMZK810sVFa8VL7do9K0xuMUS_9ewuM1agQ&s"
            width={100}
            height={100}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "What the sigma?",
      description:
        "Member 3 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the secratary of the club.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cwvA0wtqWEhHtTkJwc9l34GiZyyPrxIX5rWcSD-eVw&s"
            width={100}
            height={100}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Member 4",
      description:
        "Member 4 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the treasurer of the club.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZ8eMwq-lE3t0qyeNBUtRdQE0NqVleqfk72onFG-thA&s"
            width={100}
            height={100}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="-translate-y-[420px] flex items-center justify-center md:h-screen flex-col md:flex-row">
        <div className="text-center px-4 md:text-start">
          <TextRevealCard
            text="Meet The Cabinet Members"
            revealText="Meet The Cabinet Members"
            className="items-center hidden md:block"
          />
        </div>
      </div>
      <div className="-translate-y-[820px]">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Eboard;
