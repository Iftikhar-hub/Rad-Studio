import Group from "../assets/icons/Group.png";
import playbutton from "../assets/icons/playbutton.png";
import rad from "../assets/icons/rad.png";

const Hero = () => {
    return (
        <section className="flex flex-col relative  gap-[128px] justify-center items-center mt-[80px]">

            <div className="hero-container opacity-100 flex flex-col justify-center items-center w-[434px] h-[190px] gap-[24px]">
                

                <div className="hero-container-1 flex flex-col justify-center items-center w-[370px] h-[118px] gap-[16px]">

                    <p className="w-[351px] h-[48px] font-archivo font-[600] text-[48px] text-center leading-[100%] tracking-[-1px] bg-[linear-gradient(77.38deg,#FE3B76_9.15%,#AF29CE_49.65%,#2931DD_90.16%,#2931DD_90.16%)] 
                    bg-clip-text text-transparent " >RAD Studio 11.2</p>

                    <p className="flex flex-col  gap-[16px] w-[370px] h-[54px] font-archivo font-[400] text-[17px] leading-[150%] text-center text-[#525252] tracking-[0px] mt-[16px]">Build Apps 5x Faster With One Codebase for Windows, Android, iOS, macOS, and Linux.</p>

                    
                </div>

                <div className="hero-container-2 flex w-[434px] h-[8px] gap-[16px] justify-center mt-[24px]">
                    <div className="bg-[#171717] btn-1 flex w-[189px] h-[48px] rounded-[10px] py-[12px] px-[24px] gap-[8px]">
                        <button type="button" className="w-[141px] h-[24px] font-archivo font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Start You Free Trial</button>

                    </div>

                    <div className="btn-2 flex w-[229px] h-[48px] rounded-[10px] py-[12px] px-[24px] gap-[8px] justify-center items-center border border-[#171717]">
                        <button type="secondary" className="">Request a Product Demo</button>

                    </div>
                </div>

            </div>

            <div className="heroPicture w-[1274px] h-[712px] relative
             max-[1440px]:w-[1279px] max-[1440px]:h-[886px] max-[1440px]:gap-[64px]">
                <img src={Group} alt="Group" className="gimage max-[1440px]:w-[1279px] max-[1440px]:h-[712px]" />

                <div className="bg-black absolute top-[0] w-[100%] h-[100%] rounded-[16px] flex justify-center items-center bg-black/85
                max-[1440px]:w-[1279px] max-[1440px]:h-[712px] max-[1440px]:top-[10px] max-[1440px]:left-[-10px]">
                    <img src={playbutton} alt="playbutton" className="playButton max-[1440px]:w-[85px] max-[1440px]:h-[85px]" />

                </div>
                <div className="heroLower w-[100%] h-[107px] rounded-[16px] border py-[24px] px-[32px]   
                    gap-8 bg-[#F9F9F9] flex justify-between items-center mt-[48px]
                    max-[1440px]:w-[1279px]">

                    <div className="flex flex-row justify-center items-center w-[1011px] h-[59px] gap-4">
                        <img src={rad} alt="rad" className="w-[48px] h-[48px]" />

                        <div className="flex flex-col w-[947px] h-[59px]">

                            <p className="text-[#262626] font-archivo font-semibold text-[22px] leading-[33px] tracking-normal">RAD Studio 11.2 Resources</p>

                            <p className="text-[#262626] font-archivo font-[400] text-[17px] leading-[150%] tracking-normal">PDF's Videos & Courses of the Product</p>

                        </div>
                        
                    </div>

                    <div class="flex flex-row w-[167px] h-[43px] rounded-[12px] justify-center items-center bg-[#262626]">
                        <button className="w-[119px] h-[19px] font-archivo font-medium text-[16px] leading-[19.2px] tracking-normal text-[#FFFFFF]" type="button">View Resources</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero;