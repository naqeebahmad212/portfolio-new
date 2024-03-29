import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { LayoutGrid } from "./ui/layout-grid";

const Projects = () => {
  const cards = [
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      content: "test",
      thumbnail:
        "https://images.unsplash.com/photo-1701592559853-188818cb385e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative w-screen pb-5 lg:px-[100px] h-screen bg-[#041130]">
      <h1 className="text-2xl text-[#bed6fb] font-bold text-center pt-[50px] pb-[30px]">
        Projects
      </h1>
      <BackgroundBeams />
      <LayoutGrid cards={cards} />
    </div>
  );
};

export default Projects;
