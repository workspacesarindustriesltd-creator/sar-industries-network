import { Dashboard } from "@/components/dashboard/dashboard";
import { requirePageAccess } from "@/lib/auth-context";

export default async function HomePage() {
  await requirePageAccess();

  return <Dashboard />;
}
