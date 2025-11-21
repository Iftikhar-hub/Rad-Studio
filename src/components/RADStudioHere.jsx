import codeBase from "../assets/icons/codeBase.png";
import productivity from "../assets/icons/productivity.png";
import linux from "../assets/icons/linux.png";
import microsoft from "../assets/icons/microsoft.png";
import ue from "../assets/icons/ue.png";
import andriod from "../assets/icons/andriod.png";
import next from "../assets/icons/next.png";
import previous from "../assets/icons/previous.png";
import radsImage from "../assets/icons/radsImage.png";



const RADStudioHere = () => {
    return (
        <section className="rad-studio-here flex flex-col w-[1274px] h-[860px] gap-[80px] mt-[283px] m-auto">


            <div className="RAD-Studio-Here-1 flex flex-col justify-center items-center w-[1274px] h-[204px] gap-[24px] relative">

                <p className="pTag-1 w-[1274px] h-[72px] font-archivo font-[600] text-[48px] leading-[100%] tracking-[-1px] text-center bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent font-semibold">RAD Studio 11.2 
                    <span className="font-archivo font-[600] text-[48px] leading-[150%] tracking-[-1px] text-center text-[#262626]"> is here!</span>
                    

                </p>
                
                <p className="pTag-2 w-[1274px] h-[108px] font-archivo font-[400] text-[24px] leading-[150%] text-center text-[#525252] tracking-[-1px]">
                    RAD Studio 11.2 is here! The new release introduces Markdown support and an iOS Simulator on macOS ARM 64 for Delphi, and migrates the Delphi Linux debugger to LLDB. It also brings usability, performance and stability improvements to the IDE, the compilers and toolchains, the UX, RTL, database and Internet libraries for both Delphi and C++.
                </p>

                <img className="w-[58.89px] h-[114.07] absolute top-[10px] right-[-40px]" src={radsImage} alt="radsImage" />
                    
                   

            </div>


            <div className="RAD-Studio-Here-1 flex flex-col justify-center items-center w-[1274px] h-[576px] gap-[24px]">

                <div className="rads-1 flex flex-col justify-center items-center w-[1274px] h-[516px] gap-[32px]">


                      
                    <div className="rads-1-row1 flex flex-row w-[1274px] h-[242px] gap-[32px]">
                        <div className="row1-1 flex flex-col w-[403.33px] h-[212px] gap-[24px] rounded-[24px]">
                            <img src={codeBase} alt="codeBase" className="w-[48px] h-[48px]"/>
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                Single Code Base
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                Create apps for all major platforms with less coding effort. Write once, compile everywhere..
                            </p>
                            
                        </div>

                        <div className="row1-2 flex flex-col w-[403.33px] h-[242px] gap-[24px] rounded-[24px]">
                            <img src={productivity} alt="productivity" className="w-[48px] h-[48px]" />
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                Productivity
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                VCL Styles with design-time support: Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running..
                            </p>

                        </div>

                        <div className="row1-3 flex flex-col w-[403.33px] h-[242px] gap-[24px] rounded-[24px]">
                            <img src={linux} alt="linux" className="w-[48px] h-[48px]" />
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                Linux
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                Develop both server and FireMonkey GUI applications for Linux. Delphi now has LLDB version 12 support for debugging on Linux, also adopted for iOS Simulator.
                            </p>

                        </div>
                        
                    </div>



                    <div className="rads-1-row2 flex flex-row w-[1274px] h-[242px] gap-[32px]">

                        <div className="row2-1 flex flex-col w-[403.33px] h-[212px] gap-[24px] rounded-[24px]">
                            <img src={microsoft} alt="microsoft" className="w-[48px] h-[48px]" />
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                Windows 11
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                Modernize VCL apps for Windows 11 with up-to-date user interface controls, WinRT APIs, and HighDPI-related features
                            </p>

                        </div>
                        <div className="row2-2 flex flex-col w-[403.33px] h-[212px] gap-[24px] rounded-[24px]">
                            <img src={ue} alt="ue" className="w-[48px] h-[48px]" />
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                User Experience
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                Completely rebuilt Welcome Page with a native look and feel, and a UI that fits the IDE, and customizable layout and content.
                            </p>

                        </div>
                        <div className="row2-3 flex flex-col w-[403.33px] h-[242px] gap-[24px] rounded-[24px]">
                            <img src={andriod} alt="andriod" className="w-[48px] h-[48px]" />
                            <p className="w-[403.33px] h-[34px] font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]">
                                Android
                            </p>

                            <p className="w-[403.33px] h-[90px] font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]">
                                Support for the latest Android Level 32 API and latest Billing APIs, and migration to use the AndroidX libraries. Android support for multiple classes.
                            </p>

                        </div>

                    </div>

                </div>



                <div className="rads-2 flex flex-row w-[88px] h-[36px] gap-[16px]">
                    <img src={previous} alt="previous" className="w-[36px] h-[36px]"/>
                    <img src={next} alt="next" />


                </div>



            </div>
            




        </section>
       
    )
}
export default RADStudioHere;