import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <nav className="mx-2">
      <div className="max-w-6xl mx-auto rounded-b-lg bg-cyan-800 px-4 py-6">
        <ul className="flex justify-between items-center">
          <div>
            <Link className="text-3xl font-bold text-white" href="/">
              <li>Logo</li>
            </Link>
          </div>
          <div>
            <Link href="/client">
              <li className="text-white">Client</li>
            </Link>
          </div>
          <div className="flex gap-6 text-white">
            {!userId ? (
              <>
                <Link href="sign-in">
                  <li>Login</li>
                </Link>
                <Link href="sign-up">
                  <li>Sing Up</li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile">
                  <li>Profile</li>
                </Link>
                <li className="flex items-center">
                  <UserButton />
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
