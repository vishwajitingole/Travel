import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HotelImages from "../../components/HotelImages/HotelImages";
import { motion } from "framer-motion";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import FinalPrice from "../../components/FinalPrice/FinalPrice";

function Hotel() {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:2000/api/hotels");
        const hotelsData = response.data;
        const selectedHotel = hotelsData.find((res) => res._id === id);
        setHotel(selectedHotel); // Set selectedHotel or an empty object if not found
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  const { name, country } = hotel ?? {};

  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <main className="p-[7rem_8rem_0rem_9rem]">
        <motion.span
          initial={{ x: 20000, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-normal"
        >
          {name},{country}
        </motion.span>
        <HotelImages props={hotel} />
        <div className="flex">
          <HotelDetails props={hotel} />
          <FinalPrice props={hotel} />
        </div>
      </main>
    </div>
  );
}

export default Hotel;
