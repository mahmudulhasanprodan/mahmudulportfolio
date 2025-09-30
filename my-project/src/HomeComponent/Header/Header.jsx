
// import { FaCodeBranch } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { SiSlashdot } from "react-icons/si";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {
const[menuOpem,setmenuOpem] = useState(false);

// HandleMenu Function is start Here
const HandleMenu = () => {
    setmenuOpem(!menuOpem)
};

console.log(menuOpem);

  return (
    <>
      <div className="bg-mainBg fixed w-full md:w-[100%] md:static shadow-md md:shadow-none pt-4 pb-2">
        <div className="container m-auto">
          <div className="flex items-center justify-between py-2 bg-bgColor shadow-xl md:px-4 pt-2">
            <div className="flex">
              <span className="text-textColorThree text-3xl font-bold">
                <SiSlashdot />
              </span>
              <h2 className="font-JosefinSans leading-6 text-2xl font-bold text-textColorTwo">
                Mahmudul
              </h2>
            </div>
            <div className="md:hidden">
              <span
                className="font-bold text-xl cursor-pointer"
                onClick={HandleMenu}
              >
                <FaBarsStaggered />
              </span>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-x-10">
                <li className="font-JosefinSans text-md cursor-pointer">
                  Home
                </li>

                <li className="font-JosefinSans text-md cursor-pointer">
                  <a href="#about">About</a>
                </li>

                <li className="font-JosefinSans text-md cursor-pointer">
                  Blog
                </li>
                <li className="font-JosefinSans text-md cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <button className="font-JosefinSans px-4 py-2 rounded-md font-bold bg-textColorTwo flex  gap-x-2 text-textColorOne">
                Contact
                <span className="font-bold text-xl text-textColorOne">
                  <GoArrowUpRight />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu bar is here */}
          {menuOpem && (
            <div className="md:hidden top-0 fixed w-full h-[100vh] bg-textColorThree right-0 transition-all duration-700">
              <div>
                <span
                  className="font-bold text-xl cursor-pointer flex z-50 px-4 text-textColorOne justify-end pt-3"
                  onClick={HandleMenu}
                >
                  X
                </span>
              </div>
              <div className="pt-10">
                <ul className="flex flex-col items-center  gap-y-6 -z-20">
                  <li className="font-JosefinSans text-md cursor-pointer text-textColorOne">
                    Home
                  </li>
                  <li className="font-JosefinSans text-md cursor-pointer">
                    About
                  </li>
                  <li className="font-JosefinSans text-md cursor-pointer">
                    Blog
                  </li>
                  <li className="font-JosefinSans text-md cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header
