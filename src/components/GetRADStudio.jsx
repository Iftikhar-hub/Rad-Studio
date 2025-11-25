import leftVector from "../assets/icons/leftVector.png"
import rightVector from "../assets/icons/rightVector.png"
import RADs from "../assets/icons/RADs.png"
import rrr from "../assets/icons/rrr.png"
import cplus from "../assets/icons/cplus.png"
import shaheen from "../assets/icons/shaheen.png"
import wings from "../assets/icons/wings.png"

const GetRADStudio = () => {
    return (

        <section className="Get-RAD-Studio relative w-[100%] h-[562px] bg-[#00000005] opacity-100 backdrop-blur-[36px] overflow-hidden mt-[128px]
        max-[1440px]:w-[1439px] max-[1440px]:h-[562px] max-[1440px]:mt-[256px]">

            <img className="left_vector w-[873px] h-[964px] absolute top-[3px] left-[-23px]
            max-[1440px]:h-[722px]" src={leftVector} alt="leftVector" />

            <img className="right-vector w-[811px] h-[897px] absolute bottom-[-7px] right-[-68px]
            max-[1440px]:h-[672px]" src={rightVector} alt="rightVector" />



            <div className="GetRadContent absolute w-[100%] h-[302px] opacity-100 top-[128px]   
              gap-[48px] flex flex-col justify-center items-center
              max-[1440px]:w-[598px] max-[1440px]:left-[390px] ">

                <div className="GRC-logos w-[1038px] flex flex-col gap-[32px] justify-center items-center opacity-100 
                 max-[1440px]:w-[598px] ">

                    <div className="RGC-l1 justify-center items-center h-[110px] opacity-100 flex flex-col gap-[16px]
                    max-[1440px]:w-[598px]">
                        <p className="GRC-ps font-archivo font-bold text-[48px] leading-[120%] tracking-[-1px] text-[#262626]">
                            Get RAD
                            <span className="RGC-ps1 font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent pl-[10px]">
                                  Studio Now!
                            </span>
                        </p>

                        <p className="GRS-p1 w-[1038px] h-[36px] opacity-100 font-archivo font-normal text-[24px] leading-[150%] tracking-[0px] 
                        text-[#262626] text-center">
                            One code base, Native on any platform, Fast frame work.
                        </p>
                        
                    </div>

                    <div className="RGC-logo2 justify-center items-center h-[64px] flex flex-row gap-[32px]">
                        <img className="radsImage1 w-[64px] h-[64px]" src={RADs} alt="RADs"/>
                        <img className="radsImage1 w-[64px] h-[64px]" src={rrr} alt="rrr"/>
                        <img className="radsImage1 w-[64px] h-[64px]" src={cplus} alt="cplus"/>
                        <img className="radsImage1 w-[64px] h-[64px]" src={shaheen} alt="shaheen"/>
                        <img className="radsImage1 w-[64px] h-[64px]" src={wings} alt="wings"/>


                    </div>

                </div>

                <div className="GRC-btns h-[48px] opacity-100 flex gap-[8px] rounded-[10px] 
                px-[24px] py-[12px] bg-[#171717] mt-[48px]">
                    <button className="btn-download font-archivo font-medium text-[16px] leading-[24px] tracking-[0px] text-white" type="button">Download Now</button>

                </div>

            </div>





        </section>



    )



}

export default GetRADStudio;