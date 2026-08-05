import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "dashboard"
  | "bot"
  | "workflow"
  | "projects"
  | "tasks"
  | "clients"
  | "marketing"
  | "sales"
  | "analytics"
  | "finance"
  | "team"
  | "integrations"
  | "settings"
  | "search"
  | "calendar"
  | "bell"
  | "plus"
  | "arrow-up"
  | "activity"
  | "chevron";

const paths: Record<IconName, ReactNode> = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  bot: <><rect x="4" y="6" width="16" height="13" rx="4"/><path d="M9 10h.01M15 10h.01M8 15h8M12 6V3M10 3h4"/></>,
  workflow: <><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.5 7.5 10.8 15M15.5 7.5 13.2 15M9 6h6"/></>,
  projects: <><path d="M3 7h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 7V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2"/></>,
  tasks: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 2 2 4-4M8 16h8"/></>,
  clients: <><circle cx="9" cy="8" r="4"/><path d="M3 21a6 6 0 0 1 12 0M16 4.5a4 4 0 0 1 0 7.5M17 15a6 6 0 0 1 4 6"/></>,
  marketing: <><path d="m3 11 18-7v16L3 13Z"/><path d="M7 14v6a2 2 0 0 0 2 2h2v-7"/></>,
  sales: <><path d="M4 19V9M10 19V5M16 19v-7M22 19V2"/><path d="M2 19h22"/></>,
  analytics: <><path d="M4 19V5M4 19h16"/><path d="m7 15 4-5 3 2 5-7"/></>,
  finance: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M8 15h3"/></>,
  team: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21a6 6 0 0 1 12 0M12 20a5 5 0 0 1 10 0"/></>,
  integrations: <><path d="M8 3v5H3M16 21v-5h5M21 8h-5V3M3 16h5v5"/><path d="M8 8a6 6 0 0 1 8 0M16 16a6 6 0 0 1-8 0"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.17.38.38.73.6 1 .28.34.66.55 1.1.6h.1v4h-.1c-.44.05-.82.26-1.1.6-.22.27-.43.62-.6 1Z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  "arrow-up": <path d="m7 14 5-5 5 5M12 9v10"/>,
  activity: <path d="M3 12h4l2-6 4 12 2-6h6"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
