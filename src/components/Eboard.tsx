import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const Eboard = () => {
  const content = [
    {
      title: "Fahad Faruqi",
      description:
        "My dedication to this club comes from my passion for community & project building. Hackathons have shown me a whole new side of software engineering communities that I wish to replicate here in CCNY. I believe that by building projects with likeminded driven SWEs, we can create a community that fosters growth and learning. I use Linux btw 🤓",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="https://d1tzawfcgeew72.cloudfront.net/fahad.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="fahad faruqi photo"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </div>
      ),
    },
    {
      title: "Baljinder Singh Hothi",
      description:
        "Many of you may know me, but my name is Baljinder. I'm a CS major passionate about ML and AI. I am dedicated to BYTE due to my own life experiences; When I was a freshman and sophomore, I lacked the necessary resources needed to build my own projects. My hope with BYTE is to help CCNY students who were in similar spots as myself grow their skills, become ready for real-world applications, and ideally land a MAANG internship. My hobbies include reading, gaming, and playing sports (basketball, volleyball, and rock climbing). BTW I'm the cool Eboard member 🦅",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="https://d1tzawfcgeew72.cloudfront.net/eboard_jinder.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="baljinder singh hothi photo"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </div>
      ),
    },
    {
      title: "Jawad Kabir",
      description:
        "Hey folks! It's Jawad here. I handle moderation and internal affairs at BYTE. Some of my hobbies include meme-making, video games, Leetcode🤓, and card games. My goal for the club is to foster a productive simulated environment, allowing members to cooperate and encourage one other to improve. Ultimately the college experience is what you make out of it, and so I hope that through BYTE I can help others reach their fullest potential.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://d1tzawfcgeew72.cloudfront.net/jawad.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="jawad kabir photo"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </div>
      ),
    },
    {
      title: "Ishmam Fardin",
      description:
        "My motivation for founding this club stems from my fascination with the driven, competitive, and social nature of hackathons, alongside my desire to find a community embodying these qualities at City College. At our school, I noticed a disconnect among Computer Science students and a lack of facilities providing hands-on experience with guidance. Through BYTE, I aim to mentor members with my knowledge and advice, guide them in building their projects, and create an environment for growth and success.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://d1tzawfcgeew72.cloudfront.net/ishmam.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ishmam fardin photo"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </div>
      ),
    },
    {
      title: "Alvee",
      description:
        "Hello, My name is Muhammad Khan better known by my peers as Alvee. I am the newest member of the E-board and BYTE's very own community and social media manager. My aim is to foster a good, healthy and cooperative environment for our talented club members and ensure your experience here is fantastic. Should you have any queries and questions about how the club operates and the people you will work with, I am your man.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://d1tzawfcgeew72.cloudfront.net/alvee.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="alvee photo"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </div>
      ),
    },
  ];
  return (
    <div id="eboard">
      <h1 className="text-4xl text-center my-4 font-bold">
        Meet the cabinet members
      </h1>
      <div className="bg-black">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Eboard;
