import AboutImage from "../../assets/menimage.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="bg-bgColor py-10 pt-48">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <img
              src={AboutImage}
              alt={AboutImage}
              className="w-48 h-48 rounded-full"
            />
            <h2 className="font-JosefinSans font-bold text-2xl">
              Mahmudul Hasan
            </h2>
            <p className="font-JosefinSans font-normal text-sm">
              I{"'"}m mern stack developer
            </p>
            <div className="flex items-center gap-x-2">
              <span className="font-bold text-2xl cursor-pointer">
                <FaFacebookSquare />
              </span>
              <span className="font-bold text-2xl cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="font-bold text-2xl cursor-pointer">
                <FaSquareGithub />
              </span>
            </div>
          </div>
          {/* Personal Details Here */}
          <div className="flex items-center gap-x-10">
            <div className="w-[600px]">
              <h2 className="font-JosefinSans font-bold text-xl pb-3">Personal Details</h2>
              <p className="font-JosefinSans text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                facilis est tempore vero neque delectus doloremque, architecto
                natus id vel atque aspernatur ex. Eveniet error alias fugiat nam
                provident, quam fuga voluptas obcaecati. Aspernatur, nesciunt.
              </p>
            </div>
            <div>
                <div className="flex items-center gap-x-2">
                  <span><FaLinkedin /></span>
                  <p>Mahmudul Hasan</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
