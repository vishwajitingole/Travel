import { useEffect, useState } from "react";
import TravelCard from "../../components/TravelCard/TravelCard";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../../components/NavBar/NavBar";

import Cagtegories from "../../components/Categories/Cagtegories";
import { useCategory } from "../../context/category_context";

function Home() {
  const [hotel, setHotel] = useState([]);
  const { hotelCategory } = useCategory();

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/hotels")
      .then((res) => {
        if (hotelCategory) {
          const filteredHotels = res.data.filter(
            (hotel) => hotel.category === hotelCategory
          );
          setHotel(filteredHotels);
        }

        setHotel(res.data);
      })
      .catch((err) => console.log(err));
  }, [hotelCategory]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <Cagtegories />
      <main className="flex lg:mt-[10vh]  xs:h-[2vh] sm:mt-[8vh] xs:mt-[14vh] xl:mt-[10vh]  flex-wrap justify-center main items-center ">
        <AnimatePresence>
          {hotel &&
            hotel.map((e, index) => (
              <motion.div
                key={e._id}
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                whileHover={{
                  scale: 1.09,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <TravelCard props={e} />
              </motion.div>
            ))}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Home;
