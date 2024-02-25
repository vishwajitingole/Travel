import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Categories() {
  const [cat, setCat] = useState(null);

  useEffect(() => {
    axios
      .get("https://vishwakaahotel.cyclic.app/api/category")
      .then((res) => {
        setCat(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:mt-[8vh] sm:mt-[8vh] xs:mt-[8vh] xl:mt-[12vh] w-[100vw]">
      <motion.div className="flex p-[2rem_2rem_0rem_2rem] fixed z-10 items-center gap-1 cursor-pointer">
        {cat &&
          cat.map((e) => (
            <motion.span
              animate={{ rotate: [10, -10, 0] }}
              transition={{ duration: 2 }} // Add loop attribute
              key={e._id}
              className="flex items-center justify-center p-3 text-center border rounded-full bg-zinc-200"
            >
              {e.category}
            </motion.span>
          ))}
      </motion.div>
    </div>
  );
}

export default Categories;
