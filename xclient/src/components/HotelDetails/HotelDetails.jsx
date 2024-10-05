import "./HotelDetails.css";
import { motion } from "framer-motion";

function HotelDetails({ props }) {
  const {
    hostName,
    hostJoinedOn,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
  } = props ?? {};

  return (
    <motion.div
      initial={{ y: -200, scale: 0 }}
      animate={{ y: 0, onFocus: 1, scale: 1 }}
      transition={{
        delay: 3,
      }}
      className="hotel-details-container"
    >
      <div className="host-details">
        <p className="host-name p">
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <div className="span hotel-room-details">
          {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "}
          beds. {numberOfBathrooms} bathrooms.
        </div>
      </div>
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
          <p className="flex items-center gap-2 p">
            <i className="ri-apps-fill"></i>Dedicated Workspace
          </p>
          <span className="span">
            A common area with wifi that is well suited for working
          </span>
        </div>
        <div className="gutter-bottom-small">
          <p className="flex items-center gap-2 p">
            <i className="ri-apps-fill"></i>Great Location
          </p>
          <span className="span">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>
        <p className="flex items-center gap-2 p">
          <i className="ri-apps-fill"></i>Free cancellation before 7 days of
          booking
        </p>
      </div>
      <div className="amenities-container">
        <p className="p amenities">What this place offers</p>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Kitchen
            </span>
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Free parking on premises
            </span>
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Dedicated Workspace
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Wifi
            </span>
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Washing Machine
            </span>
            <span className="flex items-center gap-2 span">
              <i className="ri-apps-fill"></i>Patio or Balcony
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HotelDetails;
