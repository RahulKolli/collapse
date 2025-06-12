"use client";
import { useRouter } from "next/navigation";

export default function ClientLanding() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-2">Welcome, Client!</h1>
      <p className="text-muted-foreground">
        This is the landing page for clients. Start posting projects or discover
        talent!
      </p>
    </div>
  );
}
