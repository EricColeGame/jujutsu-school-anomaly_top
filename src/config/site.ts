export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Jujutsu School Anomaly Wiki",
  shortName: "Jujutsu School",
  logoText: "JS",
  tagline: "Visitor Checks, Anomalies, Shifts & Endings",
  description: "Your ultimate guide to Jujutsu School (Anomaly) on Roblox! Inspect visitors, identify cursed anomalies, survive night shifts and uncover the mystery behind Jujutsu High.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jujutsu-school-anomaly.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jujutsu-school-anomaly.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/120468139832999/Jujutsu-School",
  heroVideoId: "M_sn_WrzqB4", // Jujutsu School (Anomaly) full walkthrough / gameplay
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/results?search_query=jujutsu+school+anomaly",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
