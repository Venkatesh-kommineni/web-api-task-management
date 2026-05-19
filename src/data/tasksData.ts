import { Task } from "../entities/task";

export const tasksData: Task[] = [
  { id: 1, title: "Migrate authentication to OAuth 2.0", description: "Replace legacy session-based auth with OAuth 2.0 + PKCE flow across all microservices.", priority: "Critical", status: "In Progress" },
  { id: 2, title: "Design system token audit", description: "Audit and document all design tokens; align spacing, color, and typography variables with Figma.", priority: "High", status: "Open" },
  { id: 3, title: "Write unit tests for billing module", description: "Achieve 90%+ coverage on the billing service using Jest and React Testing Library.", priority: "High", status: "Review" },
  { id: 4, title: "Set up CI/CD pipeline for staging", description: "Configure GitHub Actions workflow to deploy to staging on every merge into develop branch.", priority: "Medium", status: "Done" },
  { id: 5, title: "Resolve CORS error on /api/reports", description: "Production users see CORS block when fetching from dashboard widget. Investigate and patch.", priority: "Critical", status: "Blocked" },
  { id: 6, title: "Implement dark mode support", description: "Add CSS custom property based theming and a user preference toggle stored in localStorage.", priority: "Medium", status: "Open" },
  { id: 7, title: "Performance audit — LCP under 2.5s", description: "Run Lighthouse on all main pages; lazy-load images, split bundles, and preconnect critical resources.", priority: "High", status: "In Progress" },
  { id: 8, title: "Data export to CSV/XLSX", description: "Allow users to export filtered table data to CSV and XLSX formats with column selection.", priority: "Low", status: "Open" },
  { id: 9, title: "Accessibility: keyboard navigation audit", description: "Ensure all interactive elements are reachable via keyboard; fix focus traps and missing labels.", priority: "High", status: "Review" }
];
