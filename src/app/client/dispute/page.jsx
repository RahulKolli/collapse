import MyForm from "@/components/client/dispute-form";
import { Metadata } from "next";

export default function DisputePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Raise a Dispute</h1>
      <MyForm />
    </>
  );
}