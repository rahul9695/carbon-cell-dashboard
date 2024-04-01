  import { AlignEndHorizontal, AlignJustify, Search, User } from "lucide-react";
  import React, { useState } from "react";
  import carbonCellLogo from "../assets/carbonCellLogo.png"
  import MobileMenuItems from "./MobileMenuItems";

  const Navbar = ({sidebar, sideBarToggle}) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMobileMenu () {
      setMobileMenu(!mobileMenu);
    }
    return (
      <div className="flex w-full items-center justify-between gap-[30px] text-white mb-4">
        <div className="flex items-center w-[120px] gap-[20px]">
          <img src={carbonCellLogo} alt="carbon cell logo" />
        </div>
        <div className="sm:flex hidden items-center bg-gray-600 rounded-md p-2 grow max-w-[550px]">
          <Search size={20} color="lightgray"/>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md outline-none pl-2 bg-transparent"
          />
        </div>
        <div
              className={`rounded-full p-2 cursor-pointer justify-center items-center hidden sm:flex bg-gray-500`}
            >
              <User />
        </div>
        <div
              className={`${
                sidebar ? "min-w-10 min-h-10" : "min-w-7 min-h-7"
              } cursor-pointer justify-center items-center flex sm:hidden`}
              onClick={toggleMobileMenu}
            >
              <AlignJustify />
        </div>
        <div className={`${mobileMenu ? "w-[250px]" : "w-0"} ${!sidebar ? "w-[50px]" : ""} duration-300 fixed top-0 right-0 h-screen`}>
          <MobileMenuItems sidebar={sidebar} sideBarToggle={sideBarToggle} mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu}/>
        </div>
        {/* {mobileMenu ? () : ""} */}
      </div>
    );
  };

  export default Navbar;
