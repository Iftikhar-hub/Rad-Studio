import logo from "../assets/icons/logo.png"
import logoTwitter from "../assets/icons/logoTwitter.png"
import logoFacebook from "../assets/icons/logoFacebook.png"
import logoDribbble from "../assets/icons/logoDribbble.png"
import logoGithub from "../assets/icons/logoGithub.png"


const RADFooter = () => {
    return (

        <section className="RAD_Footer flex flex-col justify-between w-full max-w-[1920px] h-[543px] py-[48px] px-[80px] bg-[#FFFFFF99]">

            <div className="Footer_Content flex flex-row w-auto max-w-[1760px] h-[342px] gap-[32px]">

                <div className="Footer_Content_left flex flex-row w-[320px] h-[35px] gap-[16px]">
                    <img className="FC_log w-[202px] h-[35px]" src={logo} alt="logo" />
                </div>

                <div className="Footer_Content_right flex justify-between gap-[70px] w-auto max-w-[1281px] h-[342px]">

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[87px]">
                            Products
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[116px]">
                            RAD STUDIO™
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            DELPHI®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            C++BUILDER®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            INTERBASE®
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            RAD SERVER™
                        </p>

                    </div>

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] ml-[-20px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[100px]">
                            Free Tools
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[116px]">
                            C++ Compiler
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[200px]">
                            C++Builder Community ED
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[173px]">
                            DELPHI Community ED
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            REST Debugger
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[227px]">
                            INTERBASE Developer Edition
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[117px]">
                            FMX STENCILS
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            DEV-C++
                        </p>

                    </div>

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] ml-[70px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[100px]">
                            Resources
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[156px]">
                            Events and Webinars
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[200px]">
                            White Papers
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[173px]">
                            Success Strories
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            For Educators
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[227px]">
                            Partners
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[117px]">
                            Certifications
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            MVP Program
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[174px]">
                            WEB APP Development
                        </p>

                    </div>

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] ml-[20px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[100px]">
                            Community
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[156px]">
                            Blogs
                        </p>
                    </div>

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] ml-[-30px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[87px]">
                            Compnay
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[116px]">
                            About us
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            Contact us
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            Contact sales
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            Legal
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            Privacy Policy
                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[120px]">
                            Logo
                        </p>

                    </div>

                    <div className="FCR_1 flex flex-col w-[119px] h-[222px] ml-[-50px] gap-[26px]">

                        <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] w-[116px]">
                            Get in Touch
                        </p>

                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[157px]">
                            US: 1 (512) 226-8080

                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[198px]">
                            DE: +49 (0)6103-3866-100

                        </p>
                        <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] w-[114px]">
                            info@embarcadero.com
                        </p>

                    </div>

                </div>



            </div>

            <div className="Bottom_Footer w-full max-w-[1760px] h-[24px] flex justify-center items-center">
                <p className="BF_P w-[864px] h-[14px] font-[Archivo] font-normal text-[14px] leading-[14px] text-[#1F2937]">
                    2022 Embarcadero Inc. All Rights Reserved
                </p>

                <dvi className="BF_Icons flex flex-row w-[864px] justify-end h-[24px] gap-[24px]">

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