import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Access pending",
};

async function endSession() {
  "use server";
  await signOut({ redirectTo: "/sign-in" });
}

export default async function AccessPendingPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <section className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/70 p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-orange-500">
          ACCESS PENDING
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Organization membership required</h1>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          {session.user.email ?? "This account"} is authenticated, but it does not have an
          active SAR Industries Network membership. Ask an administrator to invite or
          activate the account.
        </p>
        <form action={endSession} className="mt-8">
          <button
            type="submit"
            className="h-11 rounded-xl border border-white/10 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/5"
          >
            Sign out
          </button>
        </form>
      </section>
    </main>
  );
}
