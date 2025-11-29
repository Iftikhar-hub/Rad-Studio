import logo from "../assets/icons/logo.png";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";

const Navbar = () => {
  return (
    <div
      className="contaner  w-[100%]
          max-[1440px]:max-w-[1440px]
          max-[744px]:max-w-[744px]
          max-[375px]:w-full max-[375px]:max-w-[375px]"
    >
      <section
        className="w-[100%] h-[70px] px-[196px] py-[16px] flex justify-between items-center
              max-[1440px]:max-w-[1440px] max-[1449px]:px-[80px]
              max-[744px]:max-w-[744px] max-[744px]:py-[16px] max-[744px]:px-[24px]
              max-[375px]:w-full max-[375px]:max-w-[375px]"
      >
        <div
          className="log flex items-center max-[1440px]:h-[24px] max-[1440px]:gap-[8px]
                
                "
        >
          <img src={logo} alt="Logo" className="right-icon" />
        </div>

        <div
          className="centerLinks flex gap-[15px] 
                 max-[1440px]:gap-[24px]
                max-[744px]:hidden"
         >
          <div className="Link-1 flex items-center justify-center ">
            <p>Products</p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 flex items-center justify-center max-[1440px]:max-w-[100px]">
            <p className="FTpp w-full max-[1440px]:max-w-[90px]">Free Tools</p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 flex items-center justify-center">
            <p>Blog</p>
          </div>
          <div className="Link-1 flex items-center justify-center">
            <p>Resources</p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 flex items-center justify-center">
            <p>Getit</p>
          </div>
          <div className="Link-1 flex  justify-center">
            <p className="ppppppp w-full max-[1440px]:max-w-[73px]">
              New Tools
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-[280px] right-Buttons flex flex-row justify-between gap-[15px] 
                  max-[1440px]:max-w-[280px] max-[1440px]:h-[38px] max-[1440px]:gap-[12px]
                  max-[744px]:max-w-[320px]  max-[744px]:items-center
                  max-[375px]:justify-end"
         >
          <button
            className="btn w-full max-w-[76px] h-[38px] rounded-lg py-[8px] px-[11px] gap-[10px]
                    max-[375px]:hidden"
            type="button"
          >
            Sign in
          </button>

          <button
            type="button"
            className="btn w-full max-w-[89px] h-[38px] rounded-lg border border-[#262626] py-[8px] px-[11px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#262626] max-[375px]:hidden"
          >
            Buy now
          </button>

          <button
            type="button"
            className="btn w-full max-w-[89px] h-[38px] rounded-lg border border-[#262626] bg-[#262626] flex items-center justify-center gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-white"
          >
            Free trial
          </button>
          <img
            src={menaImage}
            alt="menaImage"
            className="menueImage w-full max-w-[24px] h-[24px] min-[745px]:hidden"
          />
        </div>
      </section>

      <div
        className="navBottom w-[100%] mx-auto h-[53px] flex justify-between items-center  
              rounded-[6px] py-[16px] px-[192px]
              max-[1449px]:max-w-[1440px] max-[1449px]:h-[53px] max-[1449px]:px-[80px]
              max-[744px]:max-w-[744px] max-[744px]:h-[90px] max-[744px]:px-[24px] max-[744px]:py-[16px] max-[744px]:flex-col max-[744px]:gap-[16px]
              max-[375px]:w-full max-[375px]:max-w-[375px] max-[375px]:flex-col "
      >
        <dvi className="navBottom-left flex items-center max-w-[228px] h-[21px] gap-[8px]">
          <a
            href="#"
            className="flex items-center max-w-[39px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626]"
          >
            Home
          </a>

          <img
            src={rightArrow}
            alt="rightArrow"
            className="max-w-[12px] h-[12px]"
          />

          <a
            className="flex items-center max-w-[58px] h-[21px] gap-[10px] font-archivo font-medium text-[14px]  leading-[21px] tracking-[0px] text-[#262626]"
            href="#"
          >
            Products
          </a>

          <img
            src={rightArrow}
            alt="rightArrow"
            className="max-w-[12px] h-[12px]"
          />

          <a
            className="flex items-center max-w-[76px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#E11D48]"
            href="#"
          >
            RAD Studio
          </a>
        </dvi>

        <div
          className="navBottom-left flex items-center h-[21px] gap-[8px]
                max-[375px]:grid max-[375px]:grid-cols-3 max-[375px]:w-[344px]"
        >
          <a
            className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline"
            href="#"
          >
            What's New? -
          </a>

          <a
            className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline"
            href="#"
          >
            Product Edition -
          </a>

          <a
            className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline"
            href="#"
          >
            Previous Version
          </a>

          <a
            className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline max-[375px]:ml-[135px]"
            href="#"
          >
            Customers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
