import MyForm from "@/components/talent/kyc-upload";
import { Metadata } from "next";

export default function kyc() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>
      <MyForm />
    </div>
  );
}