  'use client'

  import Main from "@/components/ui/Main";
  import Navbar from "@/components/ui/Navbar";
  import Sidebar from "@/components/ui/Sidebar";
  import Image from "next/image";

  export default function Home() {
    return (
      <>
      <Navbar/>

      <Sidebar/>
      <Main/>
      </>
    );
  }
