import { motion } from "framer-motion";
function NavBar() {
  // const jiggleAnimation = {
  //   y: [0, -5, 5, -3, 0], // Define the y values for the animation
  //   transition: {
  //     type: "spring",
  //     stiffness: 300,
  //     damping: 15,
  //     loop: Infinity, // Set loop to Infinity for infinite animation
  //   },
  // };
  return (
    <div className="">
      <header className="flex justify-between items-center p-3 border border-solid bg-[color:#fafafa] border-black border-[color:#d2d2d2]  heading">
        <motion.h1
          animate={{ y: 0, scale: 1 }}
          initial={{ y: 1000, scale: 10 }}
          transition={{ delay: 1 }}
          className="heading-1   text-[color:#ff6525] "
        >
          <motion.a className="link" href="/">
            Travel Go
          </motion.a>
        </motion.h1>
        <div className="flex items-center shadow cursor-pointer form-container bg-[color:#fff] h-[2.75rem] rounded">
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.3 }} // Add a delay for the first element
            className="p-[8px] text-[color:#363030] text-[color:] text-[size:0.875rem]"
          >
            Any Where
          </motion.span>
          <span className="border-right"></span>
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.6 }} // Add a delay for the second element
            className="p-[8px] text-[color:#363030] text-[color:] text-[size:0.875rem]"
          >
            Any Week
          </motion.span>
          <span></span>
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.9 }} // Add a delay for the third element
            className="p-[8px] text-[color:#363030] text-[color:] text-[size:0.875rem]"
          >
            Add Guests
          </motion.span>
        </div>

        <nav className="flex gap-5 border border-solid border-[color:#707070] hover:shadow-lg hover:ring-1 hover:ring-gray-500 rounded-[4px]">
          <div className="flex items-center text-3xl cursor-pointer">
            <i className=" text-[color:#363030] font-[2.5rem] border border-solid border-[color:#d2d2d2] ri-menu-line"></i>
            <motion.i
              animate={{ rotate: 720 }}
              transition={{ delay: 3 }}
              className=" text-[color:#363030] bg-[color:#d2d2d2] font-[2.5rem] ri-user-fill"
            ></motion.i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
