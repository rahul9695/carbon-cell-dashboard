import { AlignEndHorizontal, AlignJustify, Search } from "lucide-react";
import React from "react";
import carbonCellLogo from "../assets/carbonCellLogo.png"

const Navbar = ({sideBarToggle}) => {
  return (
    <div className="flex w-full items-center justify-between gap-[30px] text-white mb-4">
      <div className="flex items-center w-[120px] gap-[20px]">
        <img src={carbonCellLogo} alt="carbon cell logo" />
      </div>
      <div className="sm:flex hidden items-center bg-gray-600 rounded-md p-2 mt-2 grow max-w-[550px]">
        <Search size={20} color="lightgray"/>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md outline-none pl-2 bg-transparent"
        />
      </div>
      <span className="pr-2 cursor-pointer" onClick={sideBarToggle}>
        <AlignJustify />
      </span>
    </div>
  );
};

export default Navbar;
