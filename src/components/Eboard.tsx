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
            title: "Member 2",
            description:
              "Member 2 description. I go to ccny and I am a computer science major. I like to code and play video games in my free time and I am a member of the eboard. I am the vice president of the club.",
              content: (
                  <div className="h-full w-full  flex items-center justify-center text-white">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi744a-tStMZK810sVFa8VL7do9K0xuMUS_9ewuM1agQ&s"
                      width={300}
                      height={300}
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
                      width={300}
                      height={300}
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