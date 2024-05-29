import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Eboard = () => {
    const content = [
        {
          title: "Fahad Faruqi",
          description:
            "My dedication to this club comes from my passion for community & project building. Hackathons have shown me a whole new side of software engineering communities that I wish to replicate here in CCNY. I believe that by building projects with likeminded driven SWEs, we can create a community that fosters growth and learning. I use Linux btw 🤓",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <img
                    src="https://byte-media.s3.us-east-2.amazonaws.com/fahad.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>
          ),
        },
        {
            title: "Baljinder Singh Hothi",
            description:
              "Many of you may know me, but my name is Baljinder. I'm a CS major passionate about ML and AI. I am dedicated to BYTE due to my own life experiences; When I was a freshman and sophomore, I lacked the necessary resources needed to build my own projects. My hope with BYTE is to help CCNY students who were in similar spots as myself grow their skills, become ready for real-world applications, and ideally land a MAANG internship. My hobbies include reading, gaming, and playing sports (basketball, volleyball, and rock climbing). BTW I'm the cool Eboard member 🦅",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                    <img
                      src="https://byte-media.s3.us-east-2.amazonaws.com/eboard_jinder.jpg"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
            ),
          },
          {
            title: "Jawad Kabir",
            description:
              "Hey folks! It's Jawad here. I handle moderation and internal affairs at BYTE. Some of my hobbies include meme-making, video games, Leetcode🤓, and card games. My goal for the club is to foster a conductive simulated environment, allowing members to cooperate and encourage one other to improve. Ultimately the college experience is what you make out of it, and so I hope that through BYTE I can help others reach their fullest potential.",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                    <img
                      src="https://byte-media.s3.us-east-2.amazonaws.com/jawad.jpg"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
            ),
          },
          {
            title: "Ishmam Fardin",
            description:
              "My motivation for founding this club stems from my fasciation by the driven, competitive, and social nature of hackathons alongside my own desire to find a community that has those qualities within City College. I felt like there was a disconnect between Computer Science students, and a lack of fascilities to provide hands on experience with some guidance within our school. Through BYTE, my goal is to mentor members with advice and knowledge I know, guide them through building their projects, and create an environment for growth and success. \n\n Currently a junior and graduating May 2025. My hobbies include but not limited to trying new things, sports, writing and reading. 'I’m so first class, I can hand out a syllabus'",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                    <img
                      src="https://images-ext-1.discordapp.net/external/l7QnelgBWSUoVnIZ_zmXc0Ahj1GrsuwSyriWcv4k11U/https/cdn.discordapp.com/emojis/1149143530351112202.png?format=webp&quality=lossless"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
            ),
          },
          {
            title: "Member 5",
            description:
              "Member 5 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the secretary of the club.",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                    <img
                      src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Plankton-Band-Geeks.png"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
            ),
          },
          {
            title: "",
            description:
              "",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                  </div>
            ),
          },
    ]
  return (
    <div>
      <h1 className="text-4xl text-center my-4 font-bold">Meet the cabinet members</h1>
      <div>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default Eboard;
