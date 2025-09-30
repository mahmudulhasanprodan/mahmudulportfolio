import AboutImage from "../../assets/menimage.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="bg-slate-200" id="about">
        <div className="container">
          <div className="bg-bgColor shadow-xl md:px-4">
            <div className="flex flex-col items-center justify-center gap-y-2 py-20">
              <img
                src={AboutImage}
                alt={AboutImage}
                className="w-48 h-48 rounded-full shadow-lg"
              />
              <h2 className="font-JosefinSans font-bold text-2xl">
                Mahmudul Hasan
              </h2>
              <p className="font-JosefinSans font-normal text-sm">
                I{"'"}m mern stack developer
              </p>
              <div className="flex items-center gap-x-2">
                <span className="font-bold text-3xl cursor-pointer hover:text-blue-700">
                  <FaFacebookSquare />
                </span>
                <span className="font-bold text-3xl cursor-pointer hover:text-blue-700">
                  <FaLinkedin />
                </span>
                <span className="font-bold text-3xl cursor-pointer hover:text-red-700">
                  <FaSquareGithub />
                </span>
              </div>
            </div>
            {/* Personal Details Here */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-10 px-4 md:px-0">
              <div className="w-full md:w-[500px]">
                <h2 className="font-JosefinSans font-bold text-xl pb-3">
                  Personal Details
                </h2>
                <p className="font-JosefinSans text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam facilis est tempore vero neque delectus doloremque,
                  architecto natus id vel atque aspernatur ex. Eveniet error
                  alias fugiat nam provident, quam fuga voluptas obcaecati.
                  Aspernatur, nesciunt.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <IoIosContact />
                  </span>
                  <p className="font-JosefinSans text-sm font-thin">
                    Mahmudul Hasan
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaSquarePhone />
                  </span>
                  <p className="font-JosefinSans text-sm font-thin">
                    +8801859087651
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <IoMdMail />
                  </span>
                  <p className="font-JosefinSans text-sm font-thin">
                    merndev.mahmudulhasan@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaLocationDot />
                  </span>
                  <p className="font-JosefinSans text-sm font-thin">
                    Mohona Bhabanipur,Gazipur Sadar,Gazipur
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaLanguage />
                  </span>
                  <p className="font-JosefinSans text-sm font-thin">
                    Bangla,English,Hindi
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

export default About
