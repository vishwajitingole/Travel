import { toggleAuthModal, selectedTab } from "../../slice/auth_slice";
import { useDispatch, useSelector } from "react-redux";
import AuthLogin from "../Auth/AuthLogin.jsx";
import AuthSignUp from "../Auth/AuthSignUp.jsx";

function AuthModal() {
  const dispatch = useDispatch();
  const selectedTabValue = useSelector((state) => state.auth.selectedTab);

  function handleLoginClick() {
    dispatch(selectedTab("login"));
  }

  function handleSignClick() {
    dispatch(selectedTab("signup"));
  }

  function handleModalClose() {
    dispatch(toggleAuthModal());
  }

  return (
    <div className="fixed right-0 z-50 bg-white auth-modal-container top-20">
      <div className="flex items-center shadow-2xl auth-modal ">
        <button className="button btn-auth" onClick={handleLoginClick}>
          Login
        </button>
        <button className="button btn-auth" onClick={handleSignClick}>
          Signup
        </button>
        <button
          className="flex items-center justify-center button btn-auth"
          onClick={handleModalClose}
        >
          <i className="ri-close-fill"></i>
        </button>
      </div>
      <div className="">
        {selectedTabValue === "login" ? (
          <AuthLogin />
        ) : selectedTabValue === "signup" ? (
          <AuthSignUp />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AuthModal;
