
import { FaCodeBranch } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";


const Header = () => {
  return (
    <>
      <div className="bg-bgColor">
        <div className="container px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="text-textColorThree text-3xl font-bold">
                <FaCodeBranch />
              </span>
              <h2 className="font-JosefinSans leading-6 text-2xl font-bold text-textColorTwo">
                Coder <br /> Mahmudul
              </h2>
            </div>
            <div>
              <ul className="flex items-center gap-x-10">
                <li className="font-JosefinSans text-md cursor-pointer">
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
            <div>
              <button className="font-JosefinSans px-4 py-2 rounded-md font-bold bg-textColorTwo flex  gap-x-2">
                Contact
                <span className="font-bold text-xl text-textColorOne">
                  <GoArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
