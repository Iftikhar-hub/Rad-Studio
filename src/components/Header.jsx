import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";

const Header = () => {
    return (
        <section className="headerTopp w-[100%]  bg-[#262626] text-white px-4 py-2
          max-[1440px]:w-[1440px]
          max-[744px]:w-[744px]
          max-[375px]:w-[375px]">
            
            <div className="hd_t1 w-[100%] h-[56px] mx-auto flex justify-between items-center px-[80px]  
               py-[16px]
               max-[1440px]:w-[100%] max-[1440px]:h-[53px]
               max-[744px]:w-[100%] max-[744px]:px-[24px]
                max-[375px]:h-[114px]
               max-[375px]:flex-col max-[375px]:m-[0px] max-[375px]:p-[16px] max-[375px]:gap-[4px]">

                <div className="text-sm flex flex-row max-[375px]:w-[345px] max-[375px]:flex 
                   max-[375px]:flex-col max-[375px]:items-center">

                    <p className="header_PS">
                        See what’s new in Delphi,
                        <span className="font-semibold ml-1">C++ Builder, and RAD Studio</span>
                    </p>
                    <a href="#" className="underline ml-2 text-gray-300 max-[375px]:text-[#FFFFFF]">Watch the Replay</a>
                </div>

    
                <div className="flex items-center space-x-6 max-[375px]:mr-[14px]">

    
                    <div className="hidden md:flex space-x-6 text-sm
                    max-[744px]:hidden">
                        <a href="#" className="hover:text-gray-300">My Downloads</a>
                        <a href="#" className="hover:text-gray-300">Upgrade Center</a>
                        <a href="#" className="hover:text-gray-300">My Customer Portal</a>
                        <a href="#" className="hover:text-gray-300">Contact Us</a>
                    </div>

           
                    <div className="flex items-center space-x-4 text-lg ">
                        <FaSearch className="cursor-pointer hover:text-gray-300 max-[375px]:w-[20px] 
                        max-[375px]:h-[20px]" />
                        <FaShoppingCart className="cursor-pointer hover:text-gray-300 max-[375px]:w-[20px] 
                        max-[375px]:h-[20px]" />
                        <FaGlobe className="cursor-pointer hover:text-gray-300 max-[375px]:w-[20px] 
                        max-[375px]:h-[20px]" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Header;
