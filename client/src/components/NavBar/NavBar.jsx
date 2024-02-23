import { motion } from "framer-motion";
function NavBar({ hotel }) {
  return (
    <div className="">
      <header className="flex justify-between items-center p-3 border bg-[color:#fafafa]  border-[color:#d2d2d2]  heading">
        <motion.h1
          animate={{ y: 0, x: 0, scale: 1 }}
          initial={{ y: 1000, x: 1000, scale: 100 }}
          transition={{ duration: 0.5 }}
          className="heading-1   text-[color:#ff6525] "
        >
          <motion.a className="link" href="/">
            Travel Go
          </motion.a>
        </motion.h1>
        <div className="flex items-center shadow overflow-hidden  shadow-[2px_2px_5px_3px_#d2d2d2] cursor-pointer form-container bg-[color:#fff] h-[2.75rem] rounded">
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.3 }} // Add a delay for the first element
            className="p-[8px] border-r-[1px] border-solid  border-r-[color:#707070] text-[color:#363030] text-[color:] text-[size:0.875rem]"
          >
            Any Where
          </motion.span>
          <span className=""></span>
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.6 }} // Add a delay for the second element
            className="p-[8px] text-[color:#363030] border-r-[1px] border-solid  border-r-[color:#707070] text-[color:] text-[size:0.875rem]"
          >
            Any Week
          </motion.span>
          <span className=""></span>
          <motion.span
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ delay: 0.9 }} // Add a delay for the third element
            className="p-[8px] text-[color:#363030] text-[color:] text-[size:0.875rem]"
          >
            Add Guests
          </motion.span>
          <div className="">
            <i className=" bg-[--primary-color] p-[8px]  text-[1.875rem] h-full ri-search-line"></i>
          </div>
        </div>

        <nav className="flex gap-5 border border-solid border-[color:#707070] hover:shadow-lg hover:ring-1 hover:ring-gray-500 rounded-[4px]">
          <div className="flex items-center text-3xl cursor-pointer">
            <i className=" text-[color:#363030] font-[2.5rem] border border-solid border-[color:#d2d2d2] ri-menu-line"></i>

            <motion.i
              animate={{ rotate: [0, -360, 0, 360] }}
              transition={{ delay: 2, duration: 3 }}
              className=" text-[color:#363030] bg-[color:#d2d2d2] font-[2.5rem] ri-user-fill"
            ></motion.i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
