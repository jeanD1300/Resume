import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";

const exp: ExperienceProps[] = [
  {
    head1: "RPA Developer",
    head2: <LabelWithGraphic icon={Icons.Stack} content="RPA, Webmaster, Monitor" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/fts.png"
        content="FTS transport services co. ltd"
      />
    ),
    head4: "Apr 2022 - Jan 2023",
    bulletPoints: [
      "Create a robot can be used automatically according to the user's requirements.",
      "Webmaster - Management a website and creation of its content.",
      "Monitoring  Bots",
    ],
  },
  {
    head1: "Frontend Developer - R&D",
    head2: <LabelWithGraphic icon={Icons.Stack} content="JavaScript, CSS, HTML" />,
    head3: (
      <LabelWithGraphic
        image="/images/logos/eup.png"
        content="TOUCH-EUP CO., LTD"
      />
    ),
    head4: "Feb 2023 - 2024 May",
    bulletPoints: [
      "Create Components and small feature using by React, Node.js, css, Tailwind ,Javascript.",
      "Optimized the old project through the reduction of unnecessary calls.",
      "Research work to supported organizations.",
      "Study the project used within the organization for the purpose of presenting to the Board of Investment (BOI).",
    ],
  },
];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
