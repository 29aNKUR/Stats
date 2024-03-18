import FundContainer from "./FundContainer";

const SignIn = () => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[10px] text-left text-36xl-3 text-black font-ibm-plex-sans">
      <div className="w-[792px] relative h-[1072px] z-[0]">
        <div className="absolute top-[0px] left-[0px] w-[792px] h-[1072px]">
          <div className="absolute top-[0px] left-[0px] rounded-[34.58px] bg-white w-[792px] h-[1072px]" />
        </div>
      </div>
      <FundContainer
        investmentCategory="Flexi Cap Fund "
        fundCategory="Small Cap Fund "
        sectoralFundName="Sectoral Fund "
        financialInstitutionName="ELSS "
        categoryName="Index Fund "
        fundTypeName={`Large & Mid Cap Fund `}
      />
      <div className="w-[692px] absolute !m-[0] top-[50px] left-[50px] h-[193px] z-[2]">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
          <div className="w-[354px] relative inline-block">Sub-Category</div>
          <div className="w-[692px] relative text-11xl leading-[50.14px] inline-block">{`The assets are distributed between equity and cash & equivalents. `}</div>
        </div>
      </div>
      <img
        className="w-[524px] absolute !m-[0] top-[303px] left-[134px] h-[524px] z-[3]"
        alt=""
        src="/group-185.svg"
      />
    </div>
  );
};

export default SignIn;
