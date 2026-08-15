import Logo from "./Logo";
import Eyebrow from "./Eyebrow";
import TechStack from "./TechStack";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-h"
      className="mx-auto max-w-[1180px] px-[clamp(20px,4vw,40px)] py-[clamp(64px,9vw,104px)]"
    >
      <div className="mb-[60px] flex max-w-[760px] flex-col gap-[18px]">
        <Eyebrow className="text-ink">About</Eyebrow>
        <h2
          id="about-h"
          className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.012em] text-ink"
        >
          The person who makes sure it actually ships.
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] items-start gap-[clamp(30px,4vw,64px)]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex h-[148px] w-[148px] items-center justify-center rounded-full bg-ink">
            <Logo size={40} />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="font-display text-[22px] font-medium text-ink">
              Adarsh P Kumar
            </div>
            <div className="text-[10px] font-medium uppercase leading-[1.7] tracking-[0.16em] text-ink/55">
              Project manager
              <br />
              Design · Dev · Growth · AI
            </div>
          </div>
          <div className="flex items-center gap-2.5 pt-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-ink/[0.62]">
            <span className="h-[7px] w-[7px] flex-none rounded-full bg-gold" />
            Taking work for Q4
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <p className="max-w-[68ch] text-[17px] leading-[1.7] text-ink/[0.82]">
            I&apos;ve spent{" "}
            <span className="font-medium text-ink">
              six-plus years managing design and development projects and
              digital marketing campaigns in-market
            </span>
            , and{" "}
            <span className="font-medium text-ink">
              seven-plus years running the same kinds of work as a freelancer
            </span>
            . Those years overlap, which is the point: I&apos;ve been doing
            agency-grade delivery and independent delivery side by side long
            enough to know where each one breaks.
          </p>
          <p className="max-w-[68ch] text-[15px] leading-[1.8] text-ink/[0.76]">
            What clients hire me for isn&apos;t a methodology. It&apos;s the
            thing underneath it — one person who holds the scope, chases the
            designer, reads the developer&apos;s pull request comments,
            checks the ad spend against the plan, and tells you the truth
            about the timeline while there&apos;s still time to do something
            about it.
          </p>
          <p className="max-w-[68ch] text-[15px] leading-[1.8] text-ink/[0.76]">
            I work with founders, marketing heads and agency owners who have
            good people but no one holding the middle. Sometimes that&apos;s
            a full build from brief to launch. Sometimes it&apos;s a project
            four months late that needs re-baselining. Either way you get a
            written scope, a schedule with real dependencies, a weekly status
            you can forward to your board, and a single number to call.
          </p>
          <p className="max-w-[68ch] text-[15px] leading-[1.8] text-ink/[0.76]">
            <span className="font-medium text-ink">
              98% of my freelance clients come back.
            </span>{" "}
            Not because of a process document — because nothing on their
            project ever went quiet.
          </p>
          <TechStack />
        </div>
      </div>
    </section>
  );
}
