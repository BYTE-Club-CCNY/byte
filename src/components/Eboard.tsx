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
                    src="https://cdn.discordapp.com/attachments/831948449644544111/1245044742647976046/IMG_2836.JPG?ex=665751c6&is=66560046&hm=a51e1a8a98d897f9b1d699a5d72abdfe9e10dbfc9daaf489ccff8f213eeb2b69&"
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
                      src="https://cdn.discordapp.com/attachments/1225268194542092318/1245075961280467075/3A9A636F-4773-4417-B58E-FA4F8FF88CA4-574-00000029AA7D3142.jpg?ex=66576ed9&is=66561d59&hm=6f939614489a8c439bbe4dcbc17a1024047b612fdaeaf41cd6b8cd15e8a24d61&"
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
                      src="https://cdn.discordapp.com/attachments/1066458875001327628/1245190591860703313/IMG_4244.jpg?ex=6657d99b&is=6656881b&hm=fd9012356e1f7da9213931ea249c6adc9606a46f25f08e7450260b792f43fd9a&"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
            ),
          },
          {
            title: "Jason D Rosario",
            description:
              "Salutations everyone, this is JD speaking! I love chegg and I love chatgpt.",
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
