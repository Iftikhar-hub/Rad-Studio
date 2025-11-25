import logo from "../assets/icons/logo.png"
import logoTwitter from "../assets/icons/logoTwitter.png"
import logoFacebook from "../assets/icons/logoFacebook.png"
import logoDribbble from "../assets/icons/logoDribbble.png"
import logoGithub from "../assets/icons/logoGithub.png"


const RADFooter = () => {
    return (

        <section className="RAD_Footer flex flex-col justify-between w-[100%] h-[543px] py-[48px] px-[80px] bg-[#FFFFFF99]
        max-[1440px]:w-[1440px] max-[1440px]:h-[593px] max-[1440px]:py-[48px] max-[1440px]:px-[80px]">

            <div className="Footer_Content flex flex-row justify-center w-[100%] h-[342px] gap-[32px]
            max-[1440px]:w-[1280px] max-[1440px]:flex-col max-[1440px]:h-auto max-[1440px]:gap-[24px]">

                <div className="Footer_Content_left flex flex-row gap-[16px]
                max-[1440px]:w-[202px] max-[1440px]:h-[35px]">
                    <img className="FC_log w-[202px] h-[35px]" src={logo} alt="logo" />
                </div>

                <div className="Footer_Content_right flex justify-between gap-[70px] w-[1280px] h- 
                    [342px]
                     max-[1440px]:w-[1280px] max-[1440px]:h-[342px] max-[1440px]:gap-[32px]">

                    <div className="FCR_1 flex flex-col gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
                            Products
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            RAD STUDIO™
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            DELPHI®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            C++BUILDER®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            INTERBASE®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            RAD SERVER™
                        </p>

                    </div>

                    <div className="FCR_2 flex flex-col  gap-[26px]
                    max-[1440px]:w-[222px] max-[1440px]:h-[302px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
                            Free Tools
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            C++ Compiler
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            C++Builder Community ED
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            DELPHI Community ED
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            REST Debugger
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            INTERBASE Developer Edition
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            FMX STENCILS
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            DEV-C++
                        </p>

                    </div>

                    <div className="FCR_3 flex flex-col  gap-[26px]
                    max-[1440px]:w-[171px] max-[1440px]:h-[342px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
                            Resources
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Events and Webinars
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            White Papers
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Success Strories
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            For Educators
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Partners
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            Certifications
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            MVP Program
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            WEB APP Development
                        </p>

                    </div>

                    <div className="FCR_4 flex flex-col  gap-[26px]
                    max-[1440px]:w-[110px] max-[1440px]:h-[62px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
                            Community
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Blogs
                        </p>
                    </div>

                    <div className="FCR_5 flex flex-col gap-[26px]
                    max-[1440px]:w-[100px] max-[1440px]:h-[262px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
                            Compnay
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            About us
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Contact us
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            Contact sales
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Legal
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Privacy Policy
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            Logo
                        </p>

                    </div>

                    <div className="FCR_6 flex flex-col gap-[26px]
                    max-[1440px]:w-[205px] max-[1440px]:h-[142px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
                            Get in Touch
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            US: 1 (512) 226-8080

                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] ">
                            DE: +49 (0)6103-3866-100

                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563]">
                            info@embarcadero.com
                        </p>

                    </div>

                </div>



            </div>

            <div className="Bottom_Footer w-[100%] h-[24px] flex justify-center items-center
            max-[1440px]:w-[1280px] max-[1440px]:h-[24px] max-[1440px]:gap[32px]">
                <p className="BF_P w-[864px] h-[14px] font-[Archivo] font-normal text-[14px] leading-[14px] text-[#1F2937]
                max-[1440px]:w-[624px]">
                    2022 Embarcadero Inc. All Rights Reserved
                </p>

                <dvi className="BF_Icons flex flex-row w-[864px] justify-end h-[24px] gap-[24px]
                max-[1440px]:w-[624px]">

                    <img className="logoBF w-[24px] h-[24px]" src={logoTwitter} alt="logoTwitter" />
                    <img className="logoBF w-[24px] h-[24px]" src={logoFacebook} alt="logoFacebook" />
                    <img className="logoBF w-[24px] h-[24px]" src={logoDribbble} alt="logoDribbble" />
                    <img className="logoBF w-[24px] h-[24px]" src={logoGithub} alt="logoGithub" />

                </dvi>

            </div>



        </section>
    )


}
export default RADFooter;