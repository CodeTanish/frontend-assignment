"use client";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import candidates from "@/data";
import { useSidebar } from "./SidebarContext";


export default function DashboardWelcome() {

  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`transition-all duration-300 rounded-2xl bg-gradient-to-l from-[#ecf3fd] to-[#e1e5fe] p-6 w-[1215] h-[290] mt-[4%] ${
        isSidebarOpen ? "ml-[260px]" : "ml-[80px] mt-[6%]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">
          Welcome back, Krishna
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl text-sm font-bold">
          Here’s what's changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workplace from here.
        </p>

        <div className="flex flex-row justify-start gap-4">
          <div className="flex flex-col gap-4 text-2xl">
            <div className="flex items-center justify-evenly gap-4 bg-white rounded-xl w-[364] h-[83]">
              <div className="flex flex-row gap-4 font-bold">
                <svg
                  className="w-8 h-8 text-violet-600"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"></path>
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Total Jobs</p>
                  <p className="text-lg font-semibold text-gray-900">325</p>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <svg
                  className="w-8 h-8 text-violet-600"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z"></path>
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-lg font-semibold text-gray-900">1376</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm w-[364] h-[83]">
              <svg
                className="w-8 h-8 text-violet-600"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">AI Credits</p>
                <p className="text-lg font-semibold text-gray-900">20,000</p>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center justify-center w-[364] h-[248] mt-[4%]">
            <PieChart />
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm w-[364] h-[230] text-start">
            <img
              src="https://jobs-dashboard-psi.vercel.app/nav-images/illustration.png"
              alt="Illustration"
              width={342}
              height={137}
              className="mb-4"
            />
            <h5 className="text-sm font-semibold text-gray-800">
              Private Job Board
            </h5>
            <p className="text-sm text-start text-gray-600 mt-1 max-w-md font-bold w-[342] h-[36]">
              Your private job posting will appear here, accessible to the
              public via a company-specific URL.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Latest Candidates
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-2">Candidate Name</th>
                  <th className="px-4 py-2">Job Name</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Applied Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-900">
                        {candidate.id} {candidate.name}
                      </div>
                      <div className="text-gray-500">{candidate.email}</div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="text-gray-900">{candidate.jobTitle}</div>
                      <div className="text-gray-500">{candidate.jobType}</div>
                    </td>
                    <td className="px-4 py-2 font-medium">
                      {candidate.rating}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {candidate.appliedDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[383] h-[458]">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
