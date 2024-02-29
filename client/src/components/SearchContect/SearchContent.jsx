import React from "react";
import DateSelector from "../DateSelector/DateSelector";
import "./SearchContent.css";
function SearchContent() {
  return (
    <div className="fixed top-0 left-0 flex items-center w-full h-full bg-black z-1 bg-opacity-30">
      <div className="bg-[#fafafa] m-[3rem_5rem]">
        <div>
          <label htmlFor="">Where</label>
          <input
            type="text"
            className="text-[0.875rem] p-[0.5rem] border-0 bg-[#fafafa] "
            placeholder="Search Destination"
          />
        </div>
        <div className="">
          <label>Check in</label>
          <DateSelector />
        </div>
        <div className="">
          <label>Check out</label>
          <DateSelector />
        </div>
        <div className="">
          <label htmlFor="">No. of Guests</label>
          <input type="text" placeholder="Add Guests" />
        </div>
        <div className="flex font-[1rem] p-[1.25rem_0.5rem] border-0  h-full items-center search-container cursor">
          <i className="bg-[#ff6525] ri-search-line"></i>
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
