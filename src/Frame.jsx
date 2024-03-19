const Frame = () => {
    return (
      <div className="flex flex-row items-start justify-start relative gap-[10px] text-left text-5xl text-black font-ibm-plex-sans">
        <div className="w-[792px] relative h-[568px] z-[0]">
          <div className="absolute top-[0px] left-[0px] w-[792px] h-[568px]">
            <div className="absolute top-[0px] left-[0px] rounded-[34.58px] bg-white w-[792px] h-[568px]" />
            <div className="absolute top-[353px] left-[63px] w-[654px] h-[22px]">
              <div className="absolute top-[0px] left-[489px] bg-violet w-[82px] h-[22px]" />
              <div className="absolute top-[0px] left-[615px] bg-coral w-[39px] h-[22px]" />
              <div className="absolute top-[0px] left-[572px] bg-sandybrown w-[42px] h-[22px]" />
              <div className="absolute top-[0px] left-[211px] bg-aqua w-[138px] h-[22px]" />
              <div className="absolute top-[0px] left-[350px] bg-mediumslateblue w-[138px] h-[22px]" />
              <div className="absolute top-[0px] left-[0px] bg-lightskyblue w-[210px] h-[22px]" />
            </div>
          </div>
        </div>
        <div className="w-[627px] absolute !m-[0] top-[435px] left-[50px] h-[83px] z-[1]">
          <div className="absolute top-[5px] left-[0px] bg-lightskyblue w-[22px] h-[22px]" />
          <div className="absolute top-[0px] left-[32px]">
            <span>{`Equity `}</span>
            <b>32.19%</b>
          </div>
          <div className="absolute top-[56px] left-[0px] bg-aqua w-[22px] h-[22px]" />
          <div className="absolute top-[52px] left-[32px]">
            <span>{`Bonds `}</span>
            <b>26.40%</b>
          </div>
          <div className="absolute top-[52px] left-[331px] w-[296px] h-[31px]">
            <div className="absolute top-[5px] left-[0px] bg-sandybrown w-[22px] h-[22px]" />
            <div className="absolute top-[0px] left-[32px]">
              <span>{`Govt. Securities `}</span>
              <b>26.40%</b>
            </div>
          </div>
          <div className="absolute top-[0px] left-[332px] w-[177px] h-[31px]">
            <div className="absolute top-[5px] left-[0px] bg-mediumslateblue w-[22px] h-[22px]" />
            <div className="absolute top-[0px] left-[32px]">
              <span>{`Gold `}</span>
              <b>26.04%</b>
            </div>
          </div>
        </div>
        <div className="w-[692px] absolute !m-[0] top-[50px] left-[50px] h-[243px] z-[2] text-36xl-3">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative">Fund Distribution</div>
            <div className="w-[692px] relative text-11xl leading-[50.14px] inline-block">
              A mutual fund distribution represents the earnings of a fund being
              passed on to the individual investor or unit holder of the fund.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Frame;
  