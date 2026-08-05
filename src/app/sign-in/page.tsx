import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sign in",
};

async function signInWithGitHub() {
  "use server";
  await signIn("github", { redirectTo: "/" });
}

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl shadow-orange-950/30 backdrop-blur">
        <div className="mb-8 flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
            <Image src="/sar-mark.svg" alt="" width={38} height={38} priority />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-orange-500">
              SAR INDUSTRIES NETWORK
            </p>
            <h1 className="mt-1 text-2xl font-semibold">Operations dashboard</h1>
          </div>
        </div>

        <p className="mb-8 text-sm leading-6 text-zinc-400">
          Sign in with the authorized GitHub account to access organization analytics,
          projects, clients, automation, and administration.
        </p>

        <form action={signInWithGitHub}>
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-5 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Continue with GitHub
          </button>
        </form>

        <p className="mt-6 text-xs leading-5 text-zinc-500">
          Access is restricted to approved organization members. The bootstrap administrator
          is configured through the server environment.
        </p>
      </section>
    </main>
  );
}
