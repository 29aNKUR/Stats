import { useMemo } from "react";

const FundContainer = ({
  investmentCategory,
  fundCategory,
  sectoralFundName,
  financialInstitutionName,
  categoryName,
  fundTypeName,
  bWidth,
  bTop,
  bWidth1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: bWidth,
      top: bTop,
    };
  }, [bWidth, bTop]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: bWidth1,
    };
  }, [bWidth1]);

  return (
    <div
      className="w-[692px] absolute !m-[0] top-[887px] left-[50px] h-[135px] z-[1] text-left text-5xl text-black font-ibm-plex-sans"
      style={groupDivStyle}
    >
      <div className="absolute top-[5px] left-[0px] bg-lightskyblue w-[22px] h-[22px]" />
      <div className="absolute top-[0px] left-[32px]">
        <span>{investmentCategory}</span>
        <b>32.19%</b>
      </div>
      <div className="absolute top-[57px] left-[0px] bg-aqua w-[22px] h-[22px]" />
      <div className="absolute top-[52px] left-[32px]">
        <span>{fundCategory}</span>
        <b>26.40%</b>
      </div>
      <div className="absolute top-[109px] left-[0px] bg-sandybrown w-[22px] h-[22px]" />
      <div className="absolute top-[104px] left-[32px]">
        <span>{sectoralFundName}</span>
        <b>26.40%</b>
      </div>
      <div
        className="absolute top-[0px] left-[332px] w-[360px] h-[135px]"
        style={groupDiv1Style}
      >
        <div className="absolute top-[5px] left-[0px] bg-mediumslateblue w-[22px] h-[22px]" />
        <div className="absolute top-[0px] left-[32px]">
          <span>{financialInstitutionName}</span>
          <b>26.04%</b>
        </div>
        <div className="absolute top-[57px] left-[0px] bg-violet w-[22px] h-[22px]" />
        <div className="absolute top-[52px] left-[32px]">
          <span>{categoryName}</span>
          <b>12.03%</b>
        </div>
        <div className="absolute top-[109px] left-[0px] bg-coral w-[22px] h-[22px]" />
        <div className="absolute top-[104px] left-[32px]">
          <span>{fundTypeName}</span>
          <b>12.03%</b>
        </div>
      </div>
    </div>
  );
};

export default FundContainer;
