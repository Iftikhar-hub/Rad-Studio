import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";

const Header = () => {
    return (
        <section className="w-full bg-[#262626] text-white px-4 py-2">
            <div className="max-w-[1920px] h-[56px] mx-auto flex justify-between items-center px-[80px] py-[16px]">

                <div className="text-sm">
                    <p>
                        See what’s new in Delphi,
                        <span className="font-semibold ml-1">C++ Builder, and RAD Studio</span>
                        <a href="#" className="underline ml-2 text-gray-300">Watch the Replay</a>
                    </p>
                </div>

    
                <div className="flex items-center space-x-6">

    
                    <div className="hidden md:flex space-x-6 text-sm">
                        <a href="#" className="hover:text-gray-300">My Downloads</a>
                        <a href="#" className="hover:text-gray-300">Upgrade Center</a>
                        <a href="#" className="hover:text-gray-300">My Customer Portal</a>
                        <a href="#" className="hover:text-gray-300">Contact Us</a>
                    </div>

           
                    <div className="flex items-center space-x-4 text-lg">
                        <FaSearch className="cursor-pointer hover:text-gray-300" />
                        <FaShoppingCart className="cursor-pointer hover:text-gray-300" />
                        <FaGlobe className="cursor-pointer hover:text-gray-300" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Header;
