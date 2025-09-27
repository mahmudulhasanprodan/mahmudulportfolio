
import { FaCodeBranch } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className="bg-bgColor">
          <div className="container">
            <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                    <span className="text-textColorOne text-3xl font-bold"><FaCodeBranch /></span>
                    <h2 className="font-JosefinSans leading-6 text-2xl font-bold text-textColorTwo">Coder <br /> Mahmudul</h2>
                </div>
                <div>
                    <ul className="flex items-center gap-x-10">
                      <li className="text-textColorOne font-JosefinSans text-sm cursor-pointer">Home</li>
                      <li className="text-textColorOne font-JosefinSans text-sm cursor-pointer">About</li>
                      <li className="text-textColorOne font-JosefinSans text-sm cursor-pointer">Blog</li>            
                      <li className="text-textColorOne font-JosefinSans text-sm cursor-pointer">Contact</li>            
                    </ul>
                </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Header
