"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProposalStatus() {
  const proposals = [
    {
      title: "Eco-Friendly Fashion Campaign",
      brand: "GreenWear",
      date: "Submitted on May 25",
      status: "In Progress",
      budget: "₹28,000",
      color: "bg-yellow-600",
    },
    {
      title: "Gadget Review Collab",
      brand: "TechBlitz",
      date: "Accepted on May 22",
      status: "Completed",
      budget: "₹15,000",
      color: "bg-green-600",
    },
    {
      title: "Fitness Brand Shoutout",
      brand: "FitPro",
      date: "Submitted on May 18",
      status: "Pending",
      budget: "₹20,000",
      color: "bg-red-600",
    },
  ];

  const employees = [
    {
      name: "Floyd Miles",
      email: "floydmiles@pagedone.io",
      department: "Design",
      period: "3/08/2024 - 4/09/2024",
      periodType: "Monthly",
      endDate: "Jun. 27, 2024",
      salary: "$800",
      salaryType: "Fix Amount",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      dotColor: "bg-yellow-500",
      image: "/images/floyd.png", // replace with actual path
    },
    {
      name: "Savannah Nguyen",
      email: "savannahng@pagedone.io",
      department: "Research",
      period: "13/08/2024 - 19/08/2024",
      periodType: "Weekly",
      endDate: "Feb. 23, 2024",
      salary: "$18.00/hr",
      salaryType: "Hourly",
      status: "Pending",
      statusColor: "bg-red-100 text-red-700",
      dotColor: "bg-red-500",
      image: "/images/savannah.png",
    },
    {
      name: "Cameron Williamson",
      email: "cameron@pagedone.io",
      department: "Development",
      period: "3/08/2024 - 4/09/2024",
      periodType: "Monthly",
      endDate: "Oct. 16, 2024",
      salary: "$800",
      salaryType: "Fix Amount",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
      dotColor: "bg-green-500",
      image: "/images/cameron.png",
    },
    {
      name: "Darrell Steward",
      email: "darrellstew@pagedone.io",
      department: "AI & ML",
      period: "3/08/2024 - 4/09/2024",
      periodType: "Monthly",
      endDate: "Jul. 14, 2024",
      salary: "$10.00/hr",
      salaryType: "Hourly",
      status: "Pending",
      statusColor: "bg-red-100 text-red-700",
      dotColor: "bg-red-500",
      image: "/images/darrell.png",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const handleShowMore = () => setVisibleCount(visibleCount + 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-4 text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Proposals */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-semibold">Your Proposals</h1>
          <p className="text-sm text-gray-400 mb-4">Track your application status in real-time.</p>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {["All", "Submitted", "Pending", "Completed", "In Progress"].map((status, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm rounded-lg bg-white/10 border border-white/10 hover:bg-purple-600 transition whitespace-nowrap"
              >
                {status}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {proposals.slice(0, visibleCount).map((proposal, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur p-5 rounded-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">{proposal.title}</h2>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${proposal.color}`}
                  >
                    {proposal.status}
                  </span>
                </div>
                <p className="text-sm text-gray-300">Brand: {proposal.brand}</p>
                <p className="text-sm text-gray-400">{proposal.date}</p>
                <p className="text-sm text-gray-300">
                  Budget Proposed:{" "}
                  <span className="text-green-400">{proposal.budget}</span>
                </p>
                <button className="text-purple-400 hover:underline text-sm">
                  View Proposal →
                </button>
              </div>
            ))}
          </div>

          {visibleCount < proposals.length && (
            <div className="flex justify-center">
              <button
                onClick={handleShowMore}
                className="mt-4 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-sm"
              >
                Show More
              </button>
            </div>
          )}
        </section>

        {/* Payroll Table */}
        <section className="bg-white p-6 rounded-xl text-gray-800">
          <h2 className="text-xl font-semibold mb-4">Employees Payroll</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-gray-600">
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 pl-2">Full Name & Email</th>
                  <th className="py-2 px-4">Department</th>
                  <th className="py-2 px-4">Period</th>
                  <th className="py-2 px-4">End Date</th>
                  <th className="py-2 px-4">Salary</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {employees.map((emp, index) => (
                  <tr key={index}>
                    <td className="flex items-center gap-3 py-3 px-2">
                      <input type="checkbox" />
                      <Image
                        src={emp.image}
                        alt={emp.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{emp.name}</div>
                        <div className="text-xs text-gray-500">{emp.email}</div>
                      </div>
                    </td>
                    <td className="px-4">{emp.department}</td>
                    <td className="px-4">
                      {emp.period}
                      <div className="text-xs text-gray-400">{emp.periodType}</div>
                    </td>
                    <td className="px-4">{emp.endDate}</td>
                    <td className="px-4">
                      {emp.salary}
                      <div className="text-xs text-gray-400">{emp.salaryType}</div>
                    </td>
                    <td className="px-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${emp.statusColor}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${emp.dotColor}`}></span>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
