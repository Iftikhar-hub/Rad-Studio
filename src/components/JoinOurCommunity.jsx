import GlobalUsers from "../assets/icons/GlobalUsers.png";

const JoinOurCoummunity = () => {
    return (
        <section className="Join_Our_Community flex justify-center items-center w-[100%] mx-auto h-[640px] bg-[#FFFFFF66] 
        max-[1440px]:w-[1440px] max-[1440px]:h-[640px]">

            <div className="JOC_content flex flex-col w-[633px] h-[280px] gap-[32px]
            max-[1440px]:w-[514px] max-[1440px]:h-[312px] max-[1440px]:gap-[32px]">

                <div className="JOC_c1 flex flex-col w-[100%] h-[196px] gap-[8px]
                max-[1440px]:w-[514px] max-[1440px]:h-[232px] max-[1440px]:gap-[8px]">

                    <p className="JOC_JoinOur font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] text-neutral-800
                     max-[1440px]:w-[514px] max-[1440px]:h-[116px]">
                        Join Our
                    </p>
                    <p className="JOC_developer font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] bg-[linear-gradient(77.38deg,#FE3B76_9.15%,#AF29CE_49.65%,#2931DD_90.16%)] bg-clip-text text-transparent
                    max-[1440px]:w-[514px] max-[1440px]:h-[116px]">
                        Global Community Developer
                    </p>

                    <p className="JOC_d1 font-archivo font-normal text-[24px] leading-[150%] tracking-[0px] text-[#525252]
                    max-[1440px]:w-[514px] max-[1440px]:h-[108px]">
                        Join our email list and receive the latest case studies, event updates, product news, and much more.
                    </p>

                </div>

                <div className="JOC_c2 flex flex-row w-[491px] h-[52px] gap-[16px]
                max-[1440px]:h-[48px] max-[1449px]:mt-[64px]">
                    <input className="JOC_emailAddress w-[354px] h-[100%] rounded-[8px] border border-[#D4D4D4] bg-[#FFFFFFCC] py-[18px] px-[20px] gap=[10px] backdrop-blur-[32px] text-[red]
                    max-[1440px]:w-[361px] max-[1440px]:h-[48px] max-[1440px]:py-[12px] max-[1440px]:px-[20px] max-[1440px]:gap-[10px]" type="text" placeholder="Your Email" class="
                            placeholder:font-figtree placeholder:font-normal placeholder:text-[16px]placeholder:leading-[16px] placeholder:tracking-[0px] placeholder:text-[#525252]
                            w-full px-4 py-2 border rounded-lg"/>
                    
                    <button className="Btn_Subs w-[121px] h-[52px] px-[24px] py-[14px] rounded-[8px] bg-[#262626] shadow-[0_4px_32px_0_#FF5E651A] font-figtree font-medium text-[16px] leading-[24px] tracking-[0px] text-white flex items-center justify-center gap-[10px]
                    max-[1440px]:w-[122px] max-[1440px]:h-[48px]" type="button">Subscribe</button>

                </div>

            </div>

            <div className="JOC_map w-[850px] h-[438px] flex justify-center items-center
            max-[1440px]:w-[734px] max-[1440px]:h-[365px]">
                <img className="jm w-[100%] h-[410px] " src={GlobalUsers} alt="GlobalUsers"/>

            </div>

        </section>
        



    )




}
export default JoinOurCoummunity;