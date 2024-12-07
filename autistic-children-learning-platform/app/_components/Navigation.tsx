import Link from "next/link";
import { auth } from "../_lib/auth";
export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/games" className="hover:text-accent-400 transition-colors">
            Games
          </Link>
        </li>
        <li>
          <Link href="/chat" className="hover:text-accent-400 transition-colors">
            Chat
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name || "User image"}
                referrerPolicy="no-referrer"
              />
              {session.user.name}
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Account
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
