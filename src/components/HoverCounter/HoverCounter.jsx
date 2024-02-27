/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withCounter from '../../HOC/withCounter';

function HoverCounter({ incrementHandler, count }) {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-[#f2f3f8] p-8 rounded-md flex flex-col justify-center items-center">
        <div className="mb-4 text-xl text-bold">{count}</div>
        <div
          className="px-[22px] md:px-[30px] lg:px-[35px] xl:px-[37px] py-[3px] sm:py-[4px] md:py-[7px] lg:py-[9px] xl:py-[12px] bg-[#637381] text-white rounded-[5px] text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-[21.48px] cursor-pointer"
          onMouseOver={incrementHandler}
        >
          onHover increment by 1
        </div>
      </div>
    </div>
  );
}

export default withCounter(HoverCounter);
