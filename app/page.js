"use client";

import Portofolio from "@/components/portofolio";
import Navbar from "@/components/navbar"


const Page = () => {
  return ( 
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <div class ="container mt-24 mx-auto px-12 py-4">
        <Portofolio/>
      </div>
    </main>
   );
}
 
export default Page;