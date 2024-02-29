import { motion } from "framer-motion";
import MidSection from "./MidSection";
import { useAuth } from "../../context/auth_context";

function NavBar() {
  const { authDispatch } = useAuth();
  function handleAuthClick() {
    console.log(authDispatch);
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  }
  return (
    <div className="fixed z-10 w-full">
      <header className="flex justify-between items-center   border bg-[color:#fafafa]  border-[color:#d2d2d2]  heading w-full">
        <motion.h1
          animate={{ y: 0, x: 0, scale: 1 }}
          initial={{ y: 1000, x: 1000, scale: 100 }}
          transition={{ duration: 0.5 }}
          className="heading-1 text-[color:#ff6525] "
        >
          <motion.a className="link xs:text-[2rem] xs:pr-3 " href="/">
            Travel
          </motion.a>
        </motion.h1>

        <div className="hidden md:block">
          <MidSection />
        </div>

        <div
          onClick={handleAuthClick}
          className="flex gap-5 border border-solid border-[color:#707070] hover:shadow-lg hover:ring-1 hover:ring-gray-500 rounded-[4px]"
        >
          <div className="flex items-center text-3xl cursor-pointer">
            <i className=" text-[color:#363030] xs:text-[1.2rem] font-[2.5rem] p-1  border border-solid border-[color:#d2d2d2] ri-menu-line"></i>

            <motion.i
              animate={{ rotate: [0, -360, 0, 360] }}
              transition={{ delay: 2, duration: 3 }}
              className=" text-[color:#363030] bg-[color:#d2d2d2] font-[2.5rem] ri-user-fill"
            ></motion.i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
