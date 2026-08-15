import {
  SiJira,
  SiClickup,
  SiAsana,
  SiNotion,
  SiTrello,
  SiFigma,
  SiSketch,
  SiFramer,
  SiMiro,
  SiMongodb,
  SiExpress,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiWebflow,
  SiWordpress,
  SiElementor,
  SiShopify,
  SiSquarespace,
  SiWix,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiHotjar,
  SiMixpanel,
  SiSemrush,
} from "react-icons/si";
import type { IconType } from "react-icons";
import MondayIcon from "./icons/MondayIcon";

type Tool = { name: string; Icon: IconType };

const GROUPS: { label: string; tools: Tool[] }[] = [
  {
    label: "Project delivery",
    tools: [
      { name: "Jira", Icon: SiJira },
      { name: "ClickUp", Icon: SiClickup },
      { name: "Monday.com", Icon: MondayIcon },
      { name: "Asana", Icon: SiAsana },
      { name: "Notion", Icon: SiNotion },
      { name: "Trello", Icon: SiTrello },
    ],
  },
  {
    label: "Design",
    tools: [
      { name: "Figma", Icon: SiFigma },
      { name: "Sketch", Icon: SiSketch },
      { name: "Framer", Icon: SiFramer },
      { name: "Miro", Icon: SiMiro },
    ],
  },
  {
    label: "Full-stack development",
    tools: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Express", Icon: SiExpress },
      { name: "React", Icon: SiReact },
      { name: "Angular", Icon: SiAngular },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    label: "Website platforms",
    tools: [
      { name: "Webflow", Icon: SiWebflow },
      { name: "WordPress", Icon: SiWordpress },
      { name: "Elementor", Icon: SiElementor },
      { name: "Shopify", Icon: SiShopify },
      { name: "Squarespace", Icon: SiSquarespace },
      { name: "Wix", Icon: SiWix },
    ],
  },
  {
    label: "Analytics",
    tools: [
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Google Search Console", Icon: SiGooglesearchconsole },
      { name: "Google Tag Manager", Icon: SiGoogletagmanager },
      { name: "Hotjar", Icon: SiHotjar },
      { name: "Mixpanel", Icon: SiMixpanel },
      { name: "SEMrush", Icon: SiSemrush },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-cream px-[clamp(20px,4vw,40px)] pb-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mt-1 grid grid-cols-1 gap-10 border-t border-ink/[0.16] pt-[10px] lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-6">
            <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-ink/50">
              Experienced tech stack &amp; tools
            </span>
            <div className="flex flex-col gap-5">
              {GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-[190px_1fr] sm:items-center"
                >
                  <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-ink/40">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {group.tools.map(({ name, Icon }) => (
                      <span
                        key={name}
                        title={name}
                        aria-label={name}
                        className="group flex h-11 w-11 items-center justify-center border border-ink/[0.18] text-ink/70 transition-colors hover:border-gold hover:text-gold"
                      >
                        <Icon className="h-[19px] w-[19px]" />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-ink/[0.16] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <span className="font-display text-[46px] leading-[0.8] text-gold">
              &ldquo;
            </span>
            <p className="max-w-[32ch] font-display text-xl italic leading-[1.5] text-ink/[0.82]">
              Tools change every year. What doesn&apos;t is picking the
              right one for the job, not the trendy one.
            </p>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink/50">
              15+ tools · 5 disciplines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
