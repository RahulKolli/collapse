import MyForm from "@/components/client/dispute-form";
import { Metadata } from "next";

export default function DisputePage() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <MyForm heading={<h1 className="text-2xl font-bold mb-6 text-left">Raise a Dispute</h1>} />
    </div>
  );
}