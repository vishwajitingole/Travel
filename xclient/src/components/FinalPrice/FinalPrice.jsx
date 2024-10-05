import { motion } from "framer-motion";
function FinalPrice({ props }) {
  const { price, rating } = props ?? {};
  return (
    <motion.div
      initial={{ y: -200, scale: 0 }}
      animate={{ y: 0, onFocus: 1, scale: 1 }}
      transition={{
        delay: 3,
      }}
      className="flex bg-[#fafafa] mt-[2rem] p-[1.5rem] ml-auto w-[25rem] flex-col shadow-2xl  gap"
    >
      <div className="flex items-center justify-between">
        <p>
          <span className="text-xl font-semibold">Rs {price}</span> night{" "}
        </p>
        <div className="flex items-center rating">
          <i className="ri-bard-fill"></i>
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between ">
          <div className="">
            <label>Check-in</label>
          </div>
          <div className="">
            <label>Check-out</label>
          </div>
        </div>
        <div className="border border-[#707070] p-[4px_0px] p-[8px_1rem] text-left ">
          <p>GUESTS</p>
          <span>1 guests</span>
        </div>
        <div className="w-full text-white font-semibold text-center cursor p-[1rem] hover:bg-[#ff6525] bg-[#ff6525] ">
          <button>Reserve</button>
        </div>
        <div className="flex flex-col pt-[1rem]">
          <div className="flex pt-[1rem] items-center justify-between justify-center ">
            <span className="p-[1px]">Rs {price} x 2 nights</span>
            <span className="p-[1px]">Rs {price * 2}</span>
          </div>
          <div className="flex pt-[1rem] items-center justify-between justify-center ">
            <span className="p-[1px]">Service Fee</span>
            <span className="p-[1px]">Rs 200</span>
          </div>
          <div className="flex pt-[1rem] items-center border-t-[2px] mt-6 border-black  justify-between justify-center ">
            <span className="p-[1px]">Total</span>
            <span className="p-[1px]">Rs {price * 2 + 200}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FinalPrice;
