import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = await auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <UserProfile />
    </div>
  );
};

export default page;
