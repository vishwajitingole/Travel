import "./Auth.css";

function AuthLogin() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="">
            Mobile Number <span>*</span>{" "}
          </label>
          <input
            maxLength="10"
            type="number"
            placeholder="Enter your Mobile Number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span>*</span>{" "}
          </label>
          <input type="password" placeholder="Enter  Password" required />
        </div>
        <div className="">
          <button>Login</button>
        </div>
        <div className="">
          <button className="cursor-pointer">
            Login with Test Credentials
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthLogin;
