import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TravelCard from "../../components/TravelCard/TravelCard";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get("https://vishwakaahotel.cyclic.app/api/hotels")
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <main className="main flex flex-wrap p-[4rem_3rem_2rem_3rem]">
        <AnimatePresence>
          {hotel.map((e, index) => (
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
