import logo from "../assets/icons/logo.png";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";

const Navbar = () => {
    return (
        <div className="contaner max-[1449px]:w-[1440px]
          max-[744px]:w-[744px]">
            <section className="w-[100%] h-[70px] px-[196px] py-[16px] flex justify-between items-center
            max-[1449px]:w-[1440px] max-[1449px]:px-[80px]
            max-[744px]:w-[744px] max-[744px]:py-[16px] max-[744px]:px-[24px]">

                <div className="log  flex items-center max-[1440px]:w-[280px] max-[1440px]:h-[24px] max-[1440px]:gap-[8px]
                max-[744px]:w-[139px]">
                    <img src={logo} alt="Logo" className="right-icon" />
                </div>

                <div className="centerLinks flex gap-[15px]
                max-[1440px]:w-[495px] max-[1440px]:h-[21px] max-[1440px]:gap-[24px]
                max-[744px]:hidden">
                    <div className="Link-1 flex items-center justify-center ">
                        <p>Products</p>
                        <img src={downArrow} alt="downArrow" className="downArrow w-[19px] h-[19px]" />


                    </div>
                    <div className="Link-1 flex items-center justify-center max-[1440px]:w-[100px]">
                        <p className="FTpp max-[1440px]:w-[90px]">Free Tools</p>
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
                    <div className="Link-1 flex  justify-center">
                        <p className="ppppppp max-[1440px]:w-[73px]">New Tools</p>

                    </div>
                </div>

                <div className="right-Buttons flex flex-row justify-between gap-[15px] 
                max-[1440px]:w-[280px] max-[1440px]:h-[38px] max-[1440px]:gap-[12px]
                max-[744px]:w-[320px]  max-[744px]:items-center">
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
                    <img src={menaImage} alt="menaImage" className="menueImage w-[24px] h-[24px] min-[745px]:hidden" />
                </div>
            </section>

            <div className="navBottom w-[100%] mx-auto h-[53px] flex justify-between items-center rounded- 
              [6px] py-[16px] px-[192px]
              max-[1449px]:w-[1440px] max-[1449px]:h-[53px] max-[1449px]:px-[80px]
              max-[744px]:w-[744px] max-[744px]:h-[90px] max-[744px]:px-[24px] max-[744px]:py-[16px] max-[744px]:flex-col max-[744px]:gap-[16px]">

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

                    <a className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">What's New?</a>
                    <p className=" font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">Product Edition</a>
                    <p className="font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline" href="#">Previous Version</a>
                    <p className=" font-archivo font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#A3A3A3]">
                        -
                    </p>


                    <a className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline"  href="#">Customers</a>
            

                </div>

            </div>


        </div>

    )

}

export default Navbar;