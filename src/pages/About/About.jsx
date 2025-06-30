import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            I like to build...and hopefully not break things
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi! My name is Akintoye (Toye) Adesomoju and I am {" "}
                <span className="font-bold text-white">
                  primarily
                </span> 
                {" "} a Web Developer.
    
                I have always been interested in building things,
                 which has lead me in all sorts of directions.
                {" "}
                <span className="font-bold text-white">
                  Including Game Development, where I co-developed a game called{" "}
                  <a href="https://www.roblox.com/games/111957948752684/FIGHT-Squiddy-Game" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Squiddy</a> that has amassed over 64 million plays👾.
                </span>
              </p>
              <p className="text-white">
                My focus is on learning and enhancing my skills. I am particularly interested
                in backend development.
              </p>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
