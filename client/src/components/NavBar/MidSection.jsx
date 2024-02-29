import React from "react";
import { motion } from "framer-motion";
function handleSearch() {}

const MidSection = () => {
  return (
    <div
      className="flex items-center justify-center mt-[20px] "
      onClick={handleSearch}
    >
      <div className="flex items-center overflow-hidden  shadow-[2px_2px_5px_3px_#d2d2d2] cursor-pointer form-container bg-[color:#fff] h-fit py-1 rounded-lg text-xs px-1 ">
        <motion.span
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          transition={{ delay: 0.3 }} // Add a delay for the first element
          className="p-[8px] border-r-[1px] border-solid  border-r-[color:#707070] text-[color:#363030] text-[color:] "
        >
          Any Where
        </motion.span>
        <span className=""></span>
        <motion.span
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          transition={{ delay: 0.6 }} // Add a delay for the second element
          className="p-[8px] text-[color:#363030] border-r-[1px] border-solid  border-r-[color:#707070] text-[color:] text-[size:0.875rem]"
        >
          Any Week
        </motion.span>
        <span className=""></span>
        <motion.span
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          transition={{ delay: 0.9 }} // Add a delay for the third element
          className="p-[8px] text-[color:#363030] text-[color:] text-[size:0.875rem]"
        >
          Add Guests
        </motion.span>
        <div className="flex items-center justify-center">
          <i className=" bg-[--primary-color] p-4 text-[1.875rem] h-full ri-search-line rounded-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
