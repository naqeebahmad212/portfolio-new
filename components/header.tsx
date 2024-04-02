"use client";

import React from "react";

import Link from "next/link";
import {
  IconBrandFiverr,
  IconBrandUpwork,
  IconTruckLoading,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="fixed top-0 bg-transparent z-[999] w-full  ">
      <nav className="w-full relative p-4 flex items-center justify-between px-10 bg-transparent z-30 ">
        <div className="brand text-2xl font-bold text-white">
          Port <span className="text-blue-500">Folio</span>
        </div>

        <div className="flex items-center ">
          <button className="contactBtn">
            <b>Hire me!</b>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
