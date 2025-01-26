import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-10 flex items-center justify-center h-full">
      <SignIn  afterSignOutUrl="/" />
    </div>
  );
}
