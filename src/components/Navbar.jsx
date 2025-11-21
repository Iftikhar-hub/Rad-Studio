import logo from "../assets/icons/logo.png";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";

const Navbar = () => {
    return (
        <div className="contaner">
            <section className="max-w-[1920px] h-[70px] px-[196px] py-[16px] flex justify-between items-center">
                <div className="log  flex items-center">
                    <img src={logo} alt="Logo" className="right-icon" />
                </div>

                <div className="centerLinks flex gap-[15px]">
                    <div className="Link-1 flex items-center justify-center ">
                        <p>Products</p>
                        <img src={downArrow} alt="downArrow" className="downArrow w-[19px] h-[19px]" />


                    </div>
                    <div className="Link-1 flex items-center justify-center">
                        <p>Free Tools</p>
                        <img src={downArrow} alt="downArrow" className="downArrow w-[19px] h-[19px]" />

                    </div>
                    <div className="Link-1 flex items-center justify-center">
                        <p>Blog</p>

                    </div>
                    <div className="Link-1 flex items-center justify-center">
                        <p>Resources</p>
                        <img src={downArrow} alt="downArrow" className="downArrow w-[19px] h-[19px]" />
                    </div>
                    <div className="Link-1 flex items-center justify-center">
                        <p>Getit</p>

                    </div>
                    <div className="Link-1 flex items-center justify-center">
                        <p>New Tools</p>

                    </div>
                </div>

                <div className="right-Buttons flex gap-[15px]">
                    <button className="btn w-[76px] h-[38px] rounded-lg py-[8px] px-[11px] gap-[10px]" type="button">Sign in</button>

                    <button
                        type="button"
                        className="btn w-[89px] h-[38px] rounded-lg border border-[#262626] py-[8px] px-[11px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#262626]"
                    >
                        Buy now
                    </button>
                    

                    <button
                        type="button"
                        className="btn w-[89px] h-[38px] rounded-lg border border-[#262626] bg-[#262626] flex items-center justify-center gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-white"
                    >
                        Free trial
                    </button>
                </div>
            </section>

            <div className="navBottom w-full max-w-[1920px] mx-auto h-[53px] flex justify-between items-center rounded-[6px] py-[16px] px-[192px]">

                <dvi className="navBottom-left flex items-center w-[228px] h-[21px] gap-[8px]">
                    <a href="#" className="flex items-center w-[39px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626]">
                        Home
                    </a>

                    <img src={rightArrow} alt="rightArrow" className="w-[12px] h-[12px]" />

                    <a className="flex items-center w-[58px] h-[21px] gap-[10px] font-archivo font-medium text-[14px]  leading-[21px] tracking-[0px] text-[#262626]" href="#">Products</a>

                    <img src={rightArrow} alt="rightArrow" className="w-[12px] h-[12px]" />

                    <a className="flex items-center w-[76px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#E11D48]" href="#">RAD Studio</a>

                </dvi>

                <div className="navBottom-left flex items-center h-[21px] gap-[8px]">

                    <a className="flex items-center w-[85px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">What's New?</a>
                    <p className="w-[5px] h-[21px] font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center w-[99px] h-[21px] gap-[10px]font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">Product Edition</a>
                    <p className="w-[5px] h-[21px] font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center w-[110px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">Previous Version</a>
                    <p className="w-[5px] h-[21px] font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center w-[70px] h-[21px] gap-[10px]font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline"  href="#">Customers</a>
            

                </div>

            </div>


        </div>

    )

}

export default Navbar;