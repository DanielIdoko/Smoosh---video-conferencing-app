// app/sign-up/page.tsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
