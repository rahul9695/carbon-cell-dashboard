import { useState } from "react";
import {
  AlignEndHorizontal,
  AlignJustify,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CandlestickChart,
  CircleHelp,
  History,
  Home,
  PhoneCall,
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import React from "react";
import carbonCellLogo from "../assets/carbonCellLogo.png";

const Sidebar = ({ sideBarToggle, sidebar }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="w-full h-screen sticky top-0 bg-gray-600 rounded-r-xl p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-[10px]">
        <div
          className={`flex items-center ${
            sidebar ? "justify-between" : "justify-center"
          } text-white`}
        >
          {sidebar ? (
            <div className="w-[120px]">
              <img src={carbonCellLogo} alt="carbon cell logo" />
            </div>
          ) : (
            ""
          )}
          <span className="cursor-pointer" onClick={sideBarToggle}>
            <AlignJustify />
          </span>
        </div>
        <div className="flex items-center bg-gray-300 rounded-md p-2 mt-2">
          <Search size={20} />
          {sidebar ? (
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md outline-none pl-2 bg-transparent"
            />
          ) : (
            ""
          )}
        </div>
        <div className="mt-4 flex flex-col px-1 text-white gap-[2px]">
          <div
            className={`flex items-center gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "home"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            <Home size={20} />
            {sidebar ? <span className="">Home</span> : ""}
          </div>
          <div
            className={`flex align-items gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "organization"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("organization")}
          >
            <Building2 size={20} />
            {sidebar ? <span className="">Organization</span> : ""}
          </div>
          <div
            className={`flex align-items gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "assets"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("assets")}
          >
            <BriefcaseBusiness size={20} />
            {sidebar ? <span className="">Assets</span> : ""}          </div>
          <div
            className={`flex align-items gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "trade"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("trade")}
          >
            <CandlestickChart size={20} />
            {sidebar ? <span className="">Trade</span> : ""}
          </div>
          <div
            className={`flex align-items gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "history"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("history")}
          >
            <History size={20} />
            {sidebar ? <span className="">History</span> : ""}          </div>
          <div
            className={`flex align-items gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "wallet"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("wallet")}
          >
            <Wallet size={20} />
            {sidebar ? <span className="">Wallet</span> : ""}
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[2px]">
          <div className="flex justify-between gap-[10px] items-center">
            <div
              className={`flex items-center ${sidebar ? "" : "justify-center"} grow gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
                activeItem === "notifications"
                  ? "text-green-400 font-bold bg-gray-700"
                  : ""
              }`}
              onClick={() => handleItemClick("notifications")}
            >
              <BellRing size={20} />
              {sidebar ? <span className="">Notifications</span> : ""}
            </div>
            {sidebar ? (<div className="bg-green-600 rounded-md p-1 h-max">12</div>) : ""}
          </div>
          <div
            className={`flex items-center ${sidebar ? "" : "justify-center"} grow gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "support"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("support")}
          >
            <CircleHelp size={20} />
            {sidebar ? <span className="">Support</span> : ""}
          </div>
          <div
            className={`flex items-center ${sidebar ? "" : "justify-center"} grow gap-[10px] hover:bg-gray-700 p-1 rounded-md cursor-pointer ${
              activeItem === "settings"
                ? "text-green-400 font-bold bg-gray-700"
                : ""
            }`}
            onClick={() => handleItemClick("settings")}
          >
            <Settings size={20} />
            {sidebar ? <span className="">Settings</span> : ""}
          </div>
        </div>
        <div className=" flex items-center justify-center gap-[10px] bg-gray-500 p-3 rounded-lg cursor-pointer">
          <div className={`${sidebar ? "min-w-10 min-h-10" : "min-w-6 min-h-6"} rounded-full bg-red-500`}></div>
          {sidebar ? (
            <div>
              <h4 className="font-semibold">Rahul Meena</h4>
              <span className="text-[12px] text-gray-400">
                rahul.meena9695@gmail.com
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
