"use client";
import { disputeform as MyForm } from "@/components/client/dispute-form";

export default function DisputePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-800 rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 text-center">
          Raise a Dispute
        </h1>
        <MyForm />
      </div>
    </div>
  );
}