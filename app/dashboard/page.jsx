"use client";

import Dialog from "@/components/Dialog";
import Navigation, { SidebarItem } from "@/components/Navigation";
import { TabsTransitionPanel } from "@/components/TransitionPanel";
import {
  Book,
  BriefcaseBusiness,
  Home,
  MousePointer2,
  NotebookText,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <main className="w-full h-screen flex flex-row relative">
        <Navigation>
          <div className="mt-[12rem]">
            <SidebarItem icon={<Home size={20} />} text="Home" active />
            <SidebarItem
              icon={<BriefcaseBusiness size={20} />}
              text="Contribute"
            />
            <SidebarItem
              icon={<NotebookText size={20} />}
              text="Documentation"
            />
            <SidebarItem icon={<Book size={20} />} text="Roadmaps" />
          </div>
        </Navigation>
        <section className="flex flex-col p-10 ml-[2rem] w-full gap-5">
          <div className="w-full h-[150px] border">hello</div>
          <div className="grid grid-cols-6 grid-rows-5 gap-6 mt-[3rem] max-sm:block">
            <div className="col-span-2 row-span-3 bg-transparent h-auto">
              <div className="p-5">
                <h1 className="text-[2rem]">
                  Build Backend projects <br />
                  with <span className="text-orange-500 font-bold">Rust</span>
                </h1>
                <p className="text-sm text-gray-300 py-4">
                  Deep dive into rust programming language and learn to build
                  complex backend{" "}
                </p>
                <div className="flex gap-3">
                  <button className="border border-orange-500 hover:border-orange-700 cursor-pointer border-3 px-6 py-2 rounded-md">
                    Build
                  </button>
                  <button className="px-6 py-2 bg-orange-500 hover:bg-orange-700 rounded-md">
                    Learn
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-3 col-start-3 shadow-2xl bg-neutral-950 rounded-xl h-auto">
              <div>
                <Dialog />
              </div>
              {/* <img src="./img1.svg" alt="" className="" /> */}
            </div>
            <div className="col-span-2 row-span-3 col-start-5 bg-neutral-950 border rounded-2xl h-auto">
                <div className="text-center px-4 py-4 rounded-xl">

              <TabsTransitionPanel /> 
                </div>
            </div>
            <div className="col-span-3 row-span-2 row-start-4 shadow-2xl bg-neutral-950 border rounded-xl h-auto">
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-4 bg-transparent h-auto mt-6">
              <div className="flex justify-center items-center h-full">
                <h1>Also do check our new platform <br /> <span className="text-yellow-500">@CodeKar</span></h1>
              </div>
            </div>
            {/* <div className="row-span-2 col-start-6 row-start-4 bg-transparent h-auto border rounded-xl">
              <h1 className="text-2xl text-center mt-[2.5rem] font-serif">
                Make things one your own
              </h1>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
