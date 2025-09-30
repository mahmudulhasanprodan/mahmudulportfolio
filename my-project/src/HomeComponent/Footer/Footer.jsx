import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-mainBg">
        <div className="container">
          <div className="bg-bgColor shadow-xl pt-32">
            <div className="bg-slate-900 w-full h-80 relative pt-24">
              <div className="flex items-center justify-center">
                <div className="w-[750px] h-24 bg-textColorTwo absolute -top-12 flex items-center justify-between px-4 shadow-xl">
                  <div>
                    <h2 className="font-JosefinSans text-md text-textColorOne font-bold">
                      Ready for a next projects?
                    </h2>
                    <p className="font-JosefinSans text-sm text-textColorOne">
                      Let{"'"}s get started!
                    </p>
                  </div>
                  <div>
                    <button className="px-6 py-2 bg-slate-900 rounded-md text-textColorOne font-JosefinSans font-bold">
                      Contact Me!
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col item-center justify-center gap-y-4 pt-6">
                <div>
                  <h2 className="font-JosefinSans font-bold text-2xl text-textColorOne text-center">
                    Mahmudul Hasan
                  </h2>
                   <h3 className="font-JosefinSans font-bold text-md text-textColorThree text-center">Gazipur,Dhaka</h3>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-3">
                  <h2 className="font-JosefinSans font-bold text-xl text-textColorTwo">
                    Get In Touch
                  </h2>
                  <div className="flex items-center gap-x-3"> 
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <FaFacebookSquare />
                    </span>
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <FaLinkedin />
                    </span>
                    <span className="font-bold text-xl text-textColorOne cursor-pointer">
                      <FaSquareGithub />
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-JosefinSans text-gray-500 text-center border-t-2 pt-4">
                    &copy;Mahmudul Hasan.All right reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
