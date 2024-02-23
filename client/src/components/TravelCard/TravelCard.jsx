function TravelCard({ props }) {
  const { image, name, price, address, rating } = props;
  return (
    <div className="">
      <div className="shadow-[2px_5px_7px_2px] relative  shadow-[#707070] cursor-pointer hotelcard-container w-[14rem] mt-3 ml-5  rounded-[4px] bg-[#fafafa] ">
        <img
          src={image}
          alt="hotelcard"
          className="img w-[100%] h-[15rem] object-cover rounded-[4px] "
        />
        <div className="hotelcard-details text-[#363030] p-[8px]">
          <div className="flex items-center">
            <span className="font-bold location ">{address}</span>
            <span className="flex items-center ml-auto font-extrabold rating">
              <span className="ri-star-fill"></span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name text-[#363030] text-[.75rem] p-[0px_4px_8px_4px] ">
            {name}
          </p>
          <p className="price-details flex items-center  text-[#363030] text-[.75rem] p-[0px_4px_8px_4px] ">
            <span className=" font-extrabold price font-[1rem] ">
              Rs. {price}
            </span>
            <span>night</span>
          </p>
        </div>
        <div className="wishlist">
          <div className="group">
            <button className="cursor-pointer  p-[1.25rem] absolute top-0 right-0 ">
              <i className="favourite hover:fill-slate-100 ri-heart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;