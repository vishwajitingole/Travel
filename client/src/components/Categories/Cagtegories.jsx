import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className=" lg:mt-[8vh] sm:mt-[8vh]  xs:mt-[8vh] xl:mt-[12vh] w-[100vw] ">
      <div className="flex  p-[2rem_2rem_0rem_2rem]  fixed z-10 items-center gap-1 cursor-pointer ">
        {cat &&
          cat.map((e) => (
            <span
              key={e._id}
              className="flex items-center justify-center p-3 text-center border rounded-full bg-zinc-200"
            >
              {e.category}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Categories;
