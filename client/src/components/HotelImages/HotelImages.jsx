import { motion } from "framer-motion";
function HotelImages({ props }) {
  console.log(props);
  const { image, imageArr } = props ?? {};
  return (
    <div className="flex gap-2 justify-center  hotel-image-container h-[25rem]">
      <div className="h-[25rem]  primary-image-container">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          src={image}
          className=" w-[70vw] h-full primary-img w-"
          alt=""
        />
      </div>
      <motion.div className="flex flex-wrap gap-2">
        {imageArr &&
          imageArr.map((e) => (
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              key={e}
              className="hotel-img w-[20vw] h-1/2 "
              src={e}
              alt="Sorry Ye Photo Uplabhd nhi hai"
            />
          ))}
      </motion.div>
    </div>
  );
}

export default HotelImages;
