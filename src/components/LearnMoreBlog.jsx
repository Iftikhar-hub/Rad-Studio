import ReadMore from "../assets/icons/ReadMore.png";
import MLB_Arrow from "../assets/icons/MLB_Arrow.png";

const LearnMoreBlog = () => {
    return (
      <section
        className="Learn_More_Blog w-[100%] h-[804px] mt-[128px] relative m-auto
         max-[1440px]:max-w-[1280px]  max-[1440px]:h-[814px] max-[1440px]:gap-[80px]
         max-[1024px]:max-w-[864px]

         max-[768px]:max-w-[718px]  max-[768px]:gap-[64px]
         max-[744px]:max-w-[695px]  max-[744px]:gap-[64px]

         max-[425px]:max-w-[393px]  max-[425px]:h-auto max-[425px]:gap-[30px]
         max-[425px]:mt-[80px]

         max-[375px]:max-w-[343px]  max-[375px]:h-auto max-[375px]:gap-[30px]
         max-[375px]:mt-[80px]"
      >
        <p
          className="LMB_P text-center opacity-100 font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] text-[#262626]
            max-[1440px]:left-[232px]
            max-[744px]:text-[36px] max-[744px]:left-[54px]
            max-[425px]:text-[30px]
            max-[375px]:text-[30px]"
        >
          Learn More on the
          <span
            className="LMB_S font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent pl-[8px]
                max-[744px]:text-[36px] 
                max-[425px]:text-[30px]
                max-[375px]:text-[30px]"
          >
            Embarcadero Blog
          </span>
        </p>

        <div
          className="LMB_content_1 w-full max-w-[1462px] gap-[32px] mx-auto   
                 grid grid-cols-3 mt-[90px]
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[744px]:mt-[64px]

                 max-[744px]:gap-[48px] max-[744px]:w-[100%]
                 max-[744px]:grid-cols-2


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
        >
          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px] h-[188px] pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px]
                     
                     max-[768px]:max-w-[331px]
                     max-[744px]:max-w-[331px] "
          >
            <p
              className="LMB_c1_p1  font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px]
                        max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                        max-[1440px]:h-[144px]
                        max-[1024px]:text-[23px]
                        max-[744px]:text-[28px]"
            >
              3 Main C++ Compiler Tips to Develop Successful Apps
            </p>

            <div
              className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]
                        "
            >
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="Sing_lLine hidden col-span-3 border border-[#D4D4D4] border-dashed
                    max-[1440px]:max-w-[1280px]
                    max-[768px]:hidden
                    max-[744px]:hidden
                    max-[425px]:block max-[425px]:col-span-1 max-[425px]:w-[343px]
                    max-[375px]:block max-[375px]:col-span-1 max-[375px]:w-[343px]"
          ></div>

          <div
            className="LMB_c2 flex flex-col w-full max-w-[466px] h-[236px] pl-[8px] gap-[16px]
                    max-[1440px]:max-w-[405.33px] max-[1440px]:h-[243px] max-[1440px]:gap-[16px]
                    max-[744px]:max-w-[331px]"
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                        max-[1440px]:h-[30px]
                        max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2  font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                         max-[1440px]:h-[144px]
                         max-[1024px]:text-[23px]
                         max-[744px]:text-[28px]"
            >
              Top 5 Platforms For Windows Applications Development in 2022
            </p>

            <div
              className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]
                          "
            >
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="Sing_lLine hidden col-span-3 border border-[#D4D4D4] border-dashed
                    max-[1440px]:max-w-[1280px]
                    max-[768px]:hidden
                    max-[744px]:hidden
                    max-[425px]:block max-[425px]:col-span-1 max-[425px]:w-[343px]
                    max-[375px]:block max-[375px]:col-span-1 max-[375px]:w-[343px]"
          ></div>

          <div
            className="LMB_c3 flex flex-col w-full max-w-[466px] h-[236px] pl-[8px] gap-[16px]
                    max-[1440px]:max-w-[405.33px] max-[1440px]:h-[243px] max-[1440px]:gap-[16px]
                    max-[744px]:max-w-[331px]"
          >
            <p
              className="LMB_c1_p1  font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                        max-[1440px]:h-[30px]
                        max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2  font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                          max-[1440px]:h-[144px]
                          max-[1024px]:text-[23px]
                          max-[744px]:text-[28px]"
            >
              Everything You Need to Know About Cross-Platform Development
            </p>

            <div
              className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]
                        "
            >
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="Sing_lLine col-span-3 border border-[#D4D4D4] border-dashed
                    max-[1440px]:max-w-[1280px]
                    max-[768px]:hidden
                    max-[744px]:hidden
                    max-[425px]:block max-[425px]:col-span-1 max-[425px]:w-[343px]
                    max-[375px]:block max-[375px]:col-span-1 max-[375px]:w-[343px]"
          ></div>

          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px] h-[188px] pl-[8px] gap-[16px]
                    max-[1440px]:max-w-[405.33px] max-[1440px]:h-[234px] max-[1440px]:gap-[16px]
                    max-[744px]:max-w-[331px]"
          >
            <p
              className="LMB_c1_p1  font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
              max-[1024px]:text-[23px]
                         max-[1440px]:h-[144px] max-[744px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Visual Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="Sing_lLine hidden col-span-3 border border-[#D4D4D4] border-dashed
                    max-[1440px]:max-w-[1280px]
                    max-[768px]:hidden
                    max-[744px]:hidden
                    max-[425px]:block max-[425px]:col-span-1 max-[425px]:w-[343px]
                    max-[375px]:block max-[375px]:col-span-1 max-[375px]:w-[343px]"
          ></div>

          <div
            className="LMB_c2 flex flex-col w-full max-w-[466px] h-[236px] pl-[8px] gap-[16px]
                    max-[1440px]:max-w-[405.33px] max-[1440px]:h-[282px] max-[1440px]:gap-[16px]
                    max-[744px]:max-w-[331px]"
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
              max-[1024px]:text-[23px]
                         max-[1440px]:h-[192px] max-[744px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Object Oriented
              Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="Sing_lLine hidden col-span-3 border border-[#D4D4D4] border-dashed
                    max-[1440px]:max-w-[1280px]
                    max-[768px]:hidden
                    max-[744px]:hidden
                    max-[425px]:block max-[425px]:col-span-1 max-[425px]:w-[343px]
                    max-[375px]:block max-[375px]:col-span-1 max-[375px]:w-[343px]"
          ></div>

          <div
            className="LMB_c3 flex flex-col w-full max-w-[466px] h-[236px] pl-[8px] gap-[16px]
                    max-[1440px]:max-w-[405.33px] max-[1440px]:h-[286px] max-[1440px]:gap-[16px]
                    max-[744px]:max-w-[331px]"
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[744px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
              max-[1024px]:text-[23px]
                         max-[1440px]:h-[96px] max-[744px]:text-[28px]"
            >
              How C++ Works With Libraries and More
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] h-[30px] gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px] h-[30px] font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
        </div>

        <img
          className="max-w-[60px] w-full h-[80px] absolute top-[-1px] right-[300px] max-[1440px]:right-[149px]
            max-[1024px]:hidden
            max-[744px]:hidden"
          src={MLB_Arrow}
          alt="MLB_Arrow"
        />

        <div className="elip-8 w-full max-w-[731px] h-[731px]  absolute top-[268px]  left-[-253px] opacity-[10%] border border-white blur-[100px] bg-[#06B6D4]"></div>
        <div className="elip-9 w-full max-w-[731px] h-[731px]  absolute top-[-400px]  right-[0] opacity-[10%] border border-white blur-[200px] bg-[#06B6D4]"></div>
      </section>
    );
}
export default LearnMoreBlog;