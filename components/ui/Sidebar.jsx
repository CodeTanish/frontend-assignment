"use client";
import { useState } from "react";
import { useSidebar } from "./SidebarContext";

export default function Sidebar() {
  const {isSidebarOpen, toggleSidebar} = useSidebar()

  const toggleSide = () => setExpand(!expand);

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[18%]" : "w-[5%]"
      }  border-r border-dotted mt-[5%]`}
    >
      <div className="flex items-center gap-3 px-4 py-2 bg-violet-100 mt-[50] border border-r-4 border-[#0e31a5]">
        <div className="w-6 h-6 text-blue-900 flex items-center justify-center">
          <svg
            className="w-full h-full"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            data-testid="HomeOutlinedIcon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z" />
          </svg>
        </div>

        {isSidebarOpen && (
          <span className="text-sm text-[#0e31a5] font-medium">Dashboard</span>
        )}
      </div>

      <div
        onClick={toggleSidebar}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isSidebarOpen ? "left-[96%]" : "left-[85%]"
        } transition-all duration-300 cursor-pointer`}
      >
        <div className="rounded-full p-1 border border-dotted">
          <svg
            className="w-4 h-4 text-[#0e31a5]"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: "rotate(90deg)" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
