import IgnitPicture from "../assets/icons/IgnitPicture.png";
import cloud from "../assets/icons/cloud.png";


const YourImagination = () => {
    return (
        <section className="Your-Imagination flex flex-col w-full max-w-[1536px]
         gap-[48px] m-auto
         max-[1440px]:w-[1280px] max-[1440px]:h-[1075px] max-[1440px]:gap-[48px]
         max-[744px]:w-[744px] max-[1440px]:gap-[48px] max-[744px]:mt-[322px]
         max-[744px]:items-center">

            <div className="Imagination-pTag-span mt-[100px] m-auto
        ">
                <p className="Imagination-p1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] text-[#262626]
                max-[744px]:text-[36px]">
                        Ignite
                        <span className="Imagination-s1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-  
                    [-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent
                     max-[744px]:text-[36px]"> Your
                            Imagination
                        </span>
                    </p>

            </div>
            
            <div className="Imagination-Container flex flex-col items-center w-[1536px] h-[845px]
              max-[1440px]:w-[1280px] max-[1440px]:h-[969px] max-[1440px]:gap-[32px]
               max-[744px]:w-[696px]  max-[744px]:gap-[24px]">

                <div className="ImaginationNav flex flex-row w-full h-f rounded-[16px] border border- 
                  [#E5E5E5] p-[8px] justify-center
                  max-[1440px]:w-[1316px] max-[1440px]:h-[73px] max-[1440px]:gap-[8px]

                  max-[744px]:max-w-[744px] max-[744px]:w-full max-[744px]:h-[68px] max-[744px]:overflow-x-scroll max-[744px]:overflow-y-hidden max-[744px]:justify-start max-[744px]:items-center">

                    <a className="I-Ds bg-[#262626] text-[white] flex flex-row w-[217.14px] h-[57px] py-[14px] px-[24px] rounded-[12px] justify-center items-center font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:w-[107px] max-[744px]:h-[52px] max-[744px]:text-[20px]" href="#">Design</a>

                    <a className="I-Dv flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                     max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                     max-[744px]:text-[20px]" href="#">Develop</a>

                    <a className="I-Db flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:text-[20px]" href="#">Debug</a>

                    <a className="I-Dy flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:text-[20px]" href="#">Deploy</a>

                    <a className="I-Dc flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:text-[20px] max-[744px]:w-[105px]" href="#">Code Quality</a>

                    <a className="I-Dl flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:text-[20px]" href="#">Collaborate</a>

                    <a className="I-De flex flex-row  w-[217.14px] h-[57px] rounded-[12px] justify-center items-center py-[14px] px-[24px] font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-[#525252] text-center
                    max-[1440px]:w-[180px] max-[1440px]:h-[57px]
                    max-[744px]:text-[20px]" href="#">Extend</a>

                </div>

                <div className="ImaginationHero flex justify-center items-center w-[1536px] h-[740px]   
                  rounded-[16px] mt-[32px]
                  max-[1440px]:w-[1280px] max-[1440px]:h-[864px] max-[1440px]:gap-[32px]
                  max-[744px]:w-[696px] max-[744px]:h-auto max-[744px]:flex-col max-[744px]:items-center max-[744px]:justify-center max-[744px]:gap-[0px]">

                    <div className="IPicture flex flex-row items-center justify-center w-[883px] h-[740px] p-[48px] bg-[#CECECE33]
                    max-[1440px]:w-[733px] max-[1440px]:h-[864px]
                    max-[744px]:w-[696px] max-[744px]:h-[460px] max-[744px]:p-[64px]">
                        <img className="IgnitPic w-[482px] h-[394px]" src={IgnitPicture} alt="IgnitPicture"/>

                    </div>

                    <div className="IContent flex flex-col w-[653px] h-[740px] p-[32px] bg-white backdrop-blur-3xl gap-[56px]
                    max-[1440px]:w-[547px] max-[1440px]:h-[864px] max-[1440px]:gap-[56px] max-[1440px]:py-[58px] max-[1440px]:px-[32px]
                    max-[744px]:w-[696px] max-[744px]:gap-[16px]">

                        <div className="Icontent-1 flex flex-col w-[589px] h-[592px] gap-[29px]
                        max-[1440px]:w-[483px] max-[1440px]:h-[664px] max-[1440px]:gap-[24px]
                        max-[744px]:w-[632px] max-[744px]:h-auto max-[744px]:items-center">


                            <p className="ipTag opacity-100 font-archivo font-medium text-[28px] leading-[150%] tracking-[-1px] text-[#171717]
                            
                            max-[744px]:text-[24px]">
                               Design beautiful desktop and mobile app UIs with RAD Studio.
                            </p>

                            <div className="ipTag-1 flex flex-col w-[589px] h-[484px] gap-[24px]
                            max-[1440px]:gap-[24px]">

                                <p className="ipTag-1-1  opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                               ">
                                    Use RAD Studio's award-winning VCL framework for Windows and FireMonkey (FMX) visual framework to create cross-platform responsive UIs.
                                </p>

                                <p className="ipTag-1-1 opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                                ">
                                    Enjoy the new high-DPI compatible IDE on 4k+ screens.

                                </p>

                                <p className="ipTag-1-1 opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                               ">
                                    VCL library improved for use of Microsoft’s WebView 2 control in both TEdgeBrowser and TWebBrowser components, with better support for UserDataFolder and ExecutableFolder configurations.

                                </p>

                                <p className="ipTag-1-1  opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                                ">
                                    Use VCL Styles at design time! Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running.

                                </p>

                                <p className="ipTag-1-1  opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                                ">
                                    FireMonkey design-time guidelines: Prototype faster with visual lines and enhanced margin and padding support.
                                </p>

                                <p className="ipTag-1-1 opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]
                                ">
                                    Improved TPathData processing and rendering in FireMonkey library, including quadratic Bézier curve commands and other transformations.
                                </p>

                                <p className="ipReadMore opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px] underline decoration-solid decoration-0 bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent
                                ">
                                    Read More
                                </p>

                            </div>

                        </div>

                        <div className="Icontent-2 flex flex-row w-[343px] h-[28px] gap-[8px]
                        max-[744px]:ml-[21px]">

                            <p className="DownloadRAD  opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px] underline decoration-solid decoration-offset-0 decoration-0 text-[#262626]
                            
                           ">
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