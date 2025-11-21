import IgnitPicture from "../assets/icons/IgnitPicture.png";
import cloud from "../assets/icons/cloud.png";


const YourImagination = () => {
    return (
        <section className="Your-Imagination flex flex-col w-[1536px]
         gap-[48px] m-auto ">

            <div className="Imagination-pTag-span w-[490px] h-[58px] mt-[100px] m-auto">
                <p className="Imagination-p1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] text-[#262626]">
                        Ignite
                        <span className="Imagination-s1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-  
                    [-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent"> Your
                            Imagination
                        </span>
                    </p>

            </div>
            
            <div className="Imagination-Container flex flex-col items-center w-[1536px] h-[845px]
              ">

                <div className="ImaginationNav flex flex-row w-full h-f rounded-[16px] border border-[#E5E5E5] p-[8px] justify-center">

                    <a className="I-Ds bg-[#262626] text-[white] flex flex-row w-[217.14px] h-[57px] py-[14px] px-[24px] rounded-[12px] justify-center items-center font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center" href="#">Design</a>

                    <a className="I-Dv flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                     " href="#">Develop</a>

                    <a className="I-Db flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    " href="#">Debug</a>

                    <a className="I-Dy flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    " href="#">Deploy</a>

                    <a className="I-Dc flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    " href="#">Code Quality</a>

                    <a className="I-Dl flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    " href="#">Collaborate</a>

                    <a className="I-De flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    " href="#">Extend</a>

                </div>

                <div className="ImaginationHero flex justify-center items-center w-[1536px] h-[740px] rounded-[16px] mt-[32px]">

                    <div className="IPicture flex flex-row items-center justify-center w-[883px] h-[740px] p-[48px] bg-[#CECECE33]">
                        <img className="IgnitPic w-[482px] h-[394px]" src={IgnitPicture} alt="IgnitPicture"/>

                    </div>

                    <div className="IContent flex flex-col w-[653px] h-[740px] p-[32px] bg-white backdrop-blur-3xl gap-[56px]">

                        <div className="Icontent-1 flex flex-col w-[589px] h-[592px] gap-[29px]">
                            <p className="ipTag w-[589px] h-[84px] opacity-100 font-archivo font-medium text-[28px] leading-[150%] tracking-[-1px] text-[#171717]">
                               Design beautiful desktop and mobile app UIs with RAD Studio.
                            </p>

                            <div className="ipTag-1 flex flex-col w-[589px] h-[484px] gap-[24px]">

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    Use RAD Studio's award-winning VCL framework for Windows and FireMonkey (FMX) visual framework to create cross-platform responsive UIs.
                                </p>

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    Enjoy the new high-DPI compatible IDE on 4k+ screens.

                                </p>

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    VCL library improved for use of Microsoft’s WebView 2 control in both TEdgeBrowser and TWebBrowser components, with better support for UserDataFolder and ExecutableFolder configurations.

                                </p>

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    Use VCL Styles at design time! Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running.

                                </p>

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    FireMonkey design-time guidelines: Prototype faster with visual lines and enhanced margin and padding support.
                                </p>

                                <p className="ipTag-1-1 w-[589px] h-[48px] opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]">
                                    Improved TPathData processing and rendering in FireMonkey library, including quadratic Bézier curve commands and other transformations.
                                </p>

                                <p className="ipReadMore w-[589px] h-[28px] opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px] underline decoration-solid decoration-0 bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent">
                                    Read More
                                </p>

                            </div>

                        </div>

                        <div className="Icontent-2 flex flex-row w-[343px] h-[28px] gap-[8px]">
                            <p className="DownloadRAD w-[307px] h-[28px] opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px] underline decoration-solid decoration-offset-0 decoration-0 text-[#262626]">
                                Download RAD Studio Feature Matrix
                            </p>

                            <img className="cloudImage w-[28px] h-[28px]" src={cloud} alt="cloud"/>

                        </div>

                        

                        

                    </div>


                </div>

            </div>
                
            






        </section>
    )

}
export default YourImagination;