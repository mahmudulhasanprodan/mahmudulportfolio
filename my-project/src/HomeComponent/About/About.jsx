import AboutImage from "../../assets/menimage.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { useContext } from "react";
import { ThemeProvider } from "../../Utils/ThemContex";

const About = () => {

  const { themeUser } = useContext(ThemeProvider);

  return (
    <>
      <div className="bg-slate-200" id="about">
        <div className="container">
          <div
            className={`${
              themeUser === "light"
                ? "bg-bgColor shadow-xl md:px-4"
                : "bg-slate-900 shadow-xl md:px-4"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-y-2 py-20">
              <img
                src={AboutImage}
                alt={AboutImage}
                className="w-48 h-48 rounded-full shadow-lg"
              />
              <h2
                className={`${
                  themeUser === "light"
                    ? "font-JosefinSans font-bold text-2xl"
                    : "font-JosefinSans font-bold text-2xl text-textColorOne"
                }`}
              >
                Mahmudul Hasan
              </h2>
              <p
                className={`${
                  themeUser === "light"
                    ? "font-JosefinSans font-normal text-sm"
                    : "font-JosefinSans font-normal text-sm text-textColorTwo"
                }`}
              >
                I{"'"}m mern stack developer
              </p>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    themeUser === "light"
                      ? "font-bold text-3xl cursor-pointer hover:text-blue-700"
                      : "font-bold text-3xl cursor-pointer hover:text-blue-700 text-textColorOne"
                  }`}
                >
                  <FaFacebookSquare />
                </span>
                <span
                  className={`${
                    themeUser === "light"
                      ? "font-bold text-3xl cursor-pointer hover:text-blue-700"
                      : "font-bold text-3xl cursor-pointer hover:text-blue-700 text-textColorOne"
                  }`}
                >
                  <FaLinkedin />
                </span>
                <span
                  className={`${
                    themeUser === "light"
                      ? "font-bold text-3xl cursor-pointer hover:text-red-700"
                      : "font-bold text-3xl cursor-pointer hover:text-red-700 text-textColorOne"
                  }`}
                >
                  <FaSquareGithub />
                </span>
              </div>
            </div>
            {/* Personal Details Here */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-10 px-4 md:px-0 pb-10">
              <div className="w-full md:w-[500px]">
                <h2
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans font-bold text-xl pb-3"
                      : "font-JosefinSans font-bold text-xl pb-3 text-textColorTwo"
                  }`}
                >
                  Personal Details
                </h2>
                <p
                  className={`${
                    themeUser === "light"
                      ? "font-JosefinSans text-sm text-justify"
                      : "font-JosefinSans text-sm text-justify text-textColorOne"
                  }`}
                >
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
                    <BiSolidContact />
                  </span>
                  <p
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans text-sm font-thin"
                        : "font-JosefinSans text-sm font-thin text-textColorOne"
                    }`}
                  >
                    Mahmudul Hasan
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaSquarePhone />
                  </span>
                  <p
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans text-sm font-thin"
                        : "font-JosefinSans text-sm font-thin text-textColorOne"
                    }`}
                  >
                    +8801859087651
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <IoMdMail />
                  </span>
                  <p
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans text-sm font-thin"
                        : "font-JosefinSans text-sm font-thin text-textColorOne"
                    }`}
                  >
                    merndev.mahmudulhasan@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaLocationDot />
                  </span>
                  <p
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans text-sm font-thin"
                        : "font-JosefinSans text-sm font-thin text-textColorOne"
                    }`}
                  >
                    Mohona Bhabanipur,Gazipur Sadar,Gazipur
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold text-xl text-[#50589C]">
                    <FaLanguage />
                  </span>
                  <p
                    className={`${
                      themeUser === "light"
                        ? "font-JosefinSans text-sm font-thin"
                        : "font-JosefinSans text-sm font-thin text-textColorOne"
                    }`}
                  >
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
