import MyForm from "@/components/talent/kyc-upload";
import { Metadata } from "next";

export default function kyc() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">KYC Verification</h1>
      <MyForm />
    </>
  );
}