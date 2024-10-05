import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Categories.css";
import { useSelector } from "react-redux";

function Categories({ setHotel }) {
  const [cat, setCat] = useState(null);
  const [numofCat, setNumOfCat] = useState(0);
  const hotelCategory = useSelector((e) => e.category.category);

  function rclick() {
    setNumOfCat(numofCat + 10);
  }
  function lclick() {
    setNumOfCat(numofCat - 10);
  }

  useEffect(() => {
    axios

      .get("http://localhost:2000/api/category")
      .then((res) => {
        const data = res.data;
        const categoriesToShow = data.slice(numofCat, numofCat + 10);
        setCat(categoriesToShow);
      })
      .catch((err) => console.log(err));
  }, [numofCat]);

  function handleCat(cat) {
    setHotel(cat);
  }

  return (
    <div className="lg:mt-[8vh] sm:mt-[8vh] overflow-auto xs:mt-[9vh] xl:mt-[10vh] xl:mb-[3vh] w-[100vw]">
      {cat && (
        <motion.div className="flex p-[2rem_2rem_0rem_2rem] fixed z-10 items-center gap-1 cursor-pointer">
          <button onClick={lclick}>
            <i className="text-2xl rounded-xl border-black border-[2px] p-1 bg-slate-200 ri-arrow-left-line"></i>
          </button>

          {cat &&
            cat.map(({ _id, category }) => (
              <motion.span
                animate={{ x: 0 }}
                initial={{ x: 20 }}
                transition={{ duration: 0.4 }}
                key={_id}
                onClick={() => handleCat(category)}
                className={`flex items-center ${
                  category == hotelCategory ? "border-bottom" : ""
                } justify-center p-2 text-center border rounded-full bg-zinc-200`}
              >
                {category}
              </motion.span>
            ))}

          <button onClick={rclick}>
            <i className="text-2xl border-black rounded-xl border-[2px] p-1 bg-slate-200 ri-arrow-right-line"></i>
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Categories;
