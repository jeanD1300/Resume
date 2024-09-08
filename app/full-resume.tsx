import { Container } from "@/components/container";
import React from "react";
import Motion from "@/components/motion";
import HeaderSection from "@/components/section/header-section";
import SkillSection from "@/components/section/skill-section";
import WorkSection from "@/components/section/work-section";
import ProjectSection from "@/components/section/project-section";
import EducationSection from "@/components/section/education-section";

type AnimatedComponent = {
  component: React.FC; 
  delay: number; // delay for animation
};

export const FullResume = React.forwardRef((_, ref) => {
  const animatedComponents: AnimatedComponent[] = [
    { component: HeaderSection, delay: 0.1 },
    { component: EducationSection, delay: 0.3 },
    { component: SkillSection, delay: 0.5 },
    { component: WorkSection, delay: 0.7 },
    { component: ProjectSection, delay: 0.9 },
  ];

  return (
    <Container
      className="mt-9 max-w-6xl mx-auto"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {animatedComponents.map(({ component: Component, delay }, index) => (
        <Motion key={index} delay={delay}>
          <Component />
        </Motion>
      ))}
    </Container>
  );
});

FullResume.displayName = "FullResume";
