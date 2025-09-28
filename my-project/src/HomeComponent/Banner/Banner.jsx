import ProfileImage from "../../assets/menimage.jpg"
import { PiHandWaving } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";

const Banner = () => {
  return (
    <>
      <div className="bg-bgColor">
        <div className="container">
          <div className="py-32">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div>
                <img
                  src={ProfileImage}
                  alt={ProfileImage}
                  className="w-28 h-28 rounded-full border-4 border-textColorTwo"
                />
              </div>
              <div className="flex items-center gap-x-1">
                <h2 className="font-JosefinSans text-xl">
                  Hi! I am Mahmudul Hasan
                </h2>
                <span className="text-yellow-700 text-3xl">
                  <PiHandWaving />
                </span>
              </div>
              <div className="mt-4">
                <h1 className="font-JosefinSans font-bold text-5xl text-center">
                  Mern Stack Web Developer <br />
                  based in Bangladesh
                </h1>
              </div>
              <div className="w-[600px]">
                <p className="font-JosefinSans text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  omnis, accusantium numquam distinctio tenetur, a impedit
                  consectetur, beatae vitae modi dolore? Nobis consectetur atque
                  iste quis, porro molestiae cum necessitatibus laudantium nisi.
                </p>
              </div>
              <div className="flex items-center gap-x-4 pt-4">
                <button className="px-8 py-2 bg-textColorTwo rounded-md text-textColorOne font-semibold flex items-center gap-x-2">
                  Comtact me
                  <span className="font-bold">
                    <LuArrowRight />
                  </span>
                </button>
                <button className="px-8 py-2 border-2 border-textColorThree rounded-md font-semibold flex items-center gap-x-2 hover:bg-textColorThree">
                  my resume
                  <span className="font-bold">
                    <MdOutlineFileDownload />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner
