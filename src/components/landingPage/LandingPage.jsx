import React from "react";

const LandingPage = () => {
  return (
    <section className="relative w-[1187px] h-[5680px] bg-[#FFFFFF]">
      {/* navbar */}
      <div className="flex ">
        <img
          src="/images/zakapologo/image 2.png"
          alt="zakapologo"
          className="absolute w-[142px] h-[36px] top-[23px] left-[20px]"
        />

        <button
          className="absolute top-[15px] left-[998px]
          w-[167.82px] h-[52px] 
          border-[3px] border-[#0076E0] rounded-full 
          font-poppins font-extrabold text-[16px] leading-none 
          text-[#0076E0] tracking-normal cursor-pointer 
          hover:bg-[#0076E0] hover:text-white transition-all duration-300"
        >
          Join the Wishlist
        </button>
      </div>

      {/* hero section */}
      <div className="absolute w-[1056px] h-[437px] top-[106px] left-[66px] border">
        <img
          src="/images/heroimages/Group.png"
          className="absolute w-[63.75px] h-[83.45px] top-0 left-[965px] rotate-0 opacity-100"
        />
        {/* left-[1011px] */}

        <h1 className="font-['Abhaya_Libre'] font-bold text-[80px] leading-[95%] tracking-[0px] text-center mt-[36px] text-[#000000]">
          The Future of{" "}
          <span className="font-['Abhaya_Libre'] font-bold text-[80px] leading-[95%] tracking-[0px] text-center text-[#004F97]">
            E-commerce
          </span>{" "}
          Intelligence is Coming
        </h1>
        <div class="absolute w-[585px] h-[90px] top-[225px] ml-[236px]">
          <p class="font-poppins font-normal text-[20px] leading-[100%] tracking-[0]  text-center text-[#000000]  ">
            AI that helps D2C brands predict demand, optimize stock &
            <span class="block h-[0.5rem]"></span>
            boost profits. Get full transparency into
            <span class="block h-[0.5rem]"></span>
            performance, cost, and every action.
          </p>
        </div>
      </div>


      {/* =================will fix effects of button============ */}
      {/* effect of left button */}
      <div className="absolute w-[44px] h-[48px] top-[457px] left-[444px]">
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[3.88px] h-[15.08px] top-0 left-[39.05px] rotate-[13.26deg] opacity-100"
        />
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[24.3px] h-[23.21px] top-[11.2px] left-[5.3px] rotate-[13.26deg] opacity-100"
        />
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[15.91px] h-[5.53px] top-[47.78px] left-[9.74px] rotate-[13.26deg] opacity-100"
        />
      </div>

      {/* join the wishlist button */}
      <div className="absolute w-[213px] h-[66px] top-[477px] left-[487px] rounded-[50px] bg-[#0076E0] items-center justify-center cursor-pointer flex">
        <button className="font-[Poppins] font-bold text-[20px] leading-[100%] tracking-[0] text-[#ffff] w-[176.46px] h-[30px]">
          Join the Wishlist
        </button>
      </div>

      {/* right side effect */}
      <div className="absolute w-[44.00000095642667px] h-[48.00000104337455px] top-[510px] left-[689px] rotate-[-166.74deg] opacity-100">
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[3.88px] h-[15.08px] top-0 left-[39.05px] rotate-[13.26deg] opacity-100"
        />
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[24.3px] h-[23.21px] top-[11.2px] left-[5.3px] rotate-[13.26deg] opacity-100"
        />
        <img
          src="/images/heroimages/Vector.png"
          alt=""
          className="absolute w-[15.91px] h-[5.53px] top-[47.78px] left-[9.74px] rotate-[13.26deg] opacity-100"
        />
      </div>

      {/* shping cart image */}
    
      
<div className="w-[167px] h-[131px] top-[269px] absolute border left-[5px]">
  <img
    src="/images/heroimages/Ellipse 5.png"
    alt=""
    className="rotate-[-41.06deg] opacity-100"
  />
</div>

<img
  src="/images/heroimages/Shopping Cart.png"
  alt=""
  className="absolute top-[255px] left-[51px] w-[120px] h-[120px] object-contain"
/>









    </section>
  );
};

export default LandingPage;
