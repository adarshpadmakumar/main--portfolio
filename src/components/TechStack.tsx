import {
  SiJira,
  SiClickup,
  SiAsana,
  SiNotion,
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiWebflow,
  SiWordpress,
  SiElementor,
  SiGoogleanalytics,
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
    ],
  },
  {
    label: "Design",
    tools: [{ name: "Figma", Icon: SiFigma }],
  },
  {
    label: "Full-stack development",
    tools: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    label: "Website platforms",
    tools: [
      { name: "Webflow", Icon: SiWebflow },
      { name: "WordPress", Icon: SiWordpress },
      { name: "Elementor", Icon: SiElementor },
    ],
  },
  {
    label: "Analytics",
    tools: [{ name: "Google Analytics", Icon: SiGoogleanalytics }],
  },
];

export default function TechStack() {
  return (
    <div className="mt-3 flex flex-col gap-6 border-t border-ink/[0.16] pt-[26px]">
      <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-ink/50">
        Experienced tech stack &amp; tools
      </span>
      <div className="flex flex-col gap-5">
        {GROUPS.map((group) => (
          <div key={group.label} className="flex flex-wrap items-center gap-3">
            <span className="w-full text-[9px] font-medium uppercase tracking-[0.13em] text-ink/40 sm:w-auto sm:min-w-[132px]">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
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
  );
}
