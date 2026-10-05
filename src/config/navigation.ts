import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, Flag, Gamepad2, Lightbulb, Ticket, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "endings", path: "/endings", icon: Flag, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
