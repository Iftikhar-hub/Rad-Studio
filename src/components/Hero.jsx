import Group from "../assets/icons/Group.png";
import playbutton from "../assets/icons/playbutton.png";
import rad from "../assets/icons/rad.png";

const Hero = () => {
    return (
        <section className="heroSec w-[100%] flex flex-col relative  gap-[128px] justify-center items-center mt-[80px] 
        max-[1440px]:max-w-[1440px] 
        max-[744px]:max-w-[744px]
        max-[375px]:max-w-[375px] max-[375px]:overflow-x-hidden">


            {/* <div className="heroElip absolute w-[869px] h-[869px] top-[535px] left-[1300px] rounded-full  bg-red ">
            </div> */}

            <div className="hero-container opacity-100 flex flex-col justify-center items-center 
            max-w-[434px] w-full h-auto gap-[24px]
             max-[744px]:max-w-[434px] max-[744px]:w-full max-[375px]:max-w-[343px]
             max-[375px]:w-full">

                <div className="hero-container-1 flex flex-col justify-center items-center w-full max-w-[370px] h-auto gap-[16px]">

                    <p className="hero_cp1 font-archivo font-[600] text-[48px] text-center leading-[100%] tracking-[-1px] bg-[linear-gradient(77.38deg,#FE3B76_9.15%,#AF29CE_49.65%,#2931DD_90.16%,#2931DD_90.16%)] 
                    bg-clip-text text-transparent
                    max-[744px]:text-[40px] " >RAD Studio 11.2</p>

                    <p className="hero_cp2 flex flex-col  gap-[16px]  font-archivo font-[400] text-[17px] leading-[150%] text-center text-[#525252] tracking-[0px] ">Build Apps 5x Faster With One Codebase for Windows, Android, iOS, macOS, and Linux.</p>


                </div>

                <div className="hero-container-2 flex w-full max-w-[434px] h-auto gap-[16px] justify-center
                max-[375px]:flex-col max-[375px]:items-center max-[375px]:mt-auto ">

                    <div className="bg-[#171717] btn-1 flex w-full max-w-[189px] h-[48px] rounded-[10px] py-[12px] px-[24px] gap-[8px]
                    max-[375px]:max-w-[343px] justify-center items-center">
                        <button type="button" className="w-full max-w-[141px] h-[24px] font-archivo font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Start You Free Trial</button>

                    </div>

                    <div className="btn-2 flex w-full max-w-[229px] h-[48px] rounded-[10px] py-[12px] px-[24px] gap-[8px] justify-center items-center border border-[#171717] 
                    max-[375px]:max-w-[343px] ">
                        <button type="secondary" className="font-archivo font-medium text-[15px] leading-[24px] text-[#171717]">Request a Product Demo</button>

                    </div>
                </div>

            </div>

            <div className="heroPicture w-full max-w-[1274px] h-[712px] relative
              max-[1440px]:max-w-[1279px] max-[1440px]:w-full max-[1440px]:h-[886px] max-[1440px]:gap-[64px]
              max-[744px]:max-w-[695px] max-[744px]:h-[544px] max-[744px]:gap-[48px]
              max-[375px]:max-w-[343px]">

                <img src={Group} alt="Group" className="gimage w-full max-[1440px]:max-w-[1279px] max-[1440px]:h-[712px]
                max-[744px]:max-w-[695px] max-[744px]:h-[389px]
                 max-[375px]:max-w-[343px]  max-[375px]:h-[192px]" />

                <div className="bg-black absolute top-[0] w-full max-w-[100%] h-[100%] rounded-[16px] flex  
                 justify-center items-center bg-black/85
                 max-[1440px]:max-w-[1279px] max-[1440px]:h-[712px] max-[1440px]:top-[10px] max-[1440px] :left-[-10px] max-[1440px]:left-[0px]
                 max-[744px]:max-w-[695px] max-[744px]:h-[389px] max-[744px]:top-[0px] max-[744px]:left-[0px] max-[375px]:max-w-[343px]  max-[375px]:h-[192px] ">
                    <img src={playbutton} alt="playbutton" className="playButton max-[1440px]:max-w-[85px] max-[1440px]:h-[85px]
                    max-[744px]:max-w-[47px] max-[744px]:h-[47px]
                    max-[375px]:max-w-[23px] max-[375px]:h-[23px]" />

                </div>

                <div className="heroLower w-[100%] h-[107px] rounded-[16px] border py-[24px] px-[32px]   
                    gap-8 bg-[#F9F9F9] flex justify-between items-center mt-[48px]
                    max-[1440px]:max-w-[1279px]
                    max-[744px]:max-w-[695px] max-[744px]:h-[107px] max-[744px]:gap-[32px]
                    max-[375px]:max-w-[343px] max-[375px]:h-[222px] max-[375px]:flex-col
                    max-[375px]:p-[16px]">

                    <div className="logoLN flex flex-row justify-center items-center max-w-[1011px] h-  
                     [59px] gap-4
                     max-[744px]:max-w-[432px] max-[744px]:h-[59px] max-[744px]:gap-[16px]
                     max-[744px]:justify-start
                     max-[375px]:flex-col max-[375px]:justify-center max-[375px]:mt-[18px]">
                        <img src={rad} alt="rad" className="w-[48px] h-[48px]" />

                        <div className="flex flex-col">

                            <p className="text-[#262626] font-archivo font-semibold text-[22px] leading-[33px] tracking-normal">RAD Studio 11.2 Resources</p>

                            <p className="text-[#262626] font-archivo font-[400] text-[17px] leading-[150%] tracking-normal">PDF's Videos & Courses of the Product</p>

                        </div>

                    </div>

                    <div class="flex flex-row w-full max-w-[167px] h-[43px] rounded-[12px] justify-center items-center bg-[#262626] max-[375px]:max-w-[311px]">
                        <button className="w-[119px] h-[19px] font-archivo font-medium text-[16px] leading-[19.2px] tracking-normal text-[#FFFFFF]" type="button">View Resources</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero;