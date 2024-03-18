const Group = () => {
    return (
      <div className="w-full relative h-[1072px] text-left text-36xl-3 text-black font-ibm-plex-sans">
        <div className="absolute top-[0px] left-[0px] rounded-[34.58px] bg-white w-[792px] h-[1072px]" />
        <div className="absolute top-[221px] left-[50px] bg-gainsboro w-[692px] h-[788px]" />
        <div className="absolute top-[53px] left-[50px] w-[692px] h-[143px]">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[20px]">
            <div className="w-[354px] relative inline-block">Title</div>
            <div className="w-[692px] relative text-11xl leading-[50.14px] inline-block">
              Description
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Group;
  