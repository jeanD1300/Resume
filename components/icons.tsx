import React from "react";
import {
  Sun,
  MoonStar,
  Github,
  Mail,
  Briefcase,
  PhoneCall,
  Layers,
  FileBadge,
  Link,
} from "lucide-react";

import type { LucideProps, LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  Sun: Sun,
  Moon: MoonStar,
  Github: Github,
  Mail: Mail,
  Briefcase: Briefcase,
  PhoneCall: PhoneCall,
  Stack: Layers,
  FileBadge: FileBadge,
  Link: Link,
} as const;
