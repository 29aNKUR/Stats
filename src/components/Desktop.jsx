import GroupComponent from "./GroupComponent";
import FundContainer from "./FundContainer";

const Desktop = () => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[10px] text-left text-36xl-3 text-black font-ibm-plex-sans">
      <div className="w-[792px] relative h-[1038px] z-[0]">
        <div className="absolute top-[0px] left-[0px] w-[792px] h-[1038px]">
          <div className="absolute top-[0px] left-[0px] rounded-[34.58px] bg-white w-[792px] h-[1038px]" />
          <GroupComponent />
        </div>
      </div>
      <FundContainer
        investmentCategory={`Oil & Gas `}
        fundCategory="Pharmaceuticals "
        sectoralFundName="Power Generation "
        financialInstitutionName="Private Bank "
        categoryName="Construction "
        fundTypeName="Other "
        bWidth="596px"
        bTop="853px"
        bWidth1="264px"
      />
      <div className="!m-[0] absolute top-[50px] left-[50px] flex flex-row items-start justify-start z-[2]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="w-[354px] relative inline-block">Top Sectors</div>
          <div className="w-[692px] relative text-11xl leading-[50.14px] inline-block">{`The assets are distributed between equity and cash & equivalents. `}</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
