import "./Auth.css";

function AuthLogin() {
  return (
    <div className="w-[30vw] auth-container">
      <form action="">
        <div className="flex flex-col lb-in-container">
          <label htmlFor="" className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            maxLength="10"
            type="number"
            className="auth-input"
            placeholder="Enter your Mobile Number"
            required
          />
        </div>
        <div className="flex flex-col lb-in-container">
          <label htmlFor="" className="auth-label">
            Password <span>*</span>{" "}
          </label>

          <input
            className="auth-input"
            type="password"
            placeholder="Enter  Password"
            required
          />
        </div>
        <div className="btn bg-[#FF6525] mb-2 text-center rounded text-white cta btn-login">
          <button>Login</button>
        </div>
        <div className="button cta btn-outline-primary">
          <button className="cursor-pointer">
            Login with Test Credentials
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthLogin;
