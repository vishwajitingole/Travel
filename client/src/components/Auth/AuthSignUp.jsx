import "./Auth.css";

function AuthSignUp() {
  return (
    <div className="auth-container">
      <form action="">
        <div className="flex flex-col lb-in-container">
          <label htmlFor="" className="auth-label">
            Mobile Number <span>*</span>{" "}
          </label>
          <input
            className="auth-input"
            maxLength="10"
            type="number"
            placeholder="Enter your Mobile Number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="auth-label">
            Name <span>*</span>{" "}
          </label>
          <input className="auth-input" placeholder="Enter Name" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="auth-label">
            Email <span>*</span>{" "}
          </label>
          <input
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="auth-label">
            Password <span>*</span>{" "}
          </label>
          <input
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="auth-label">
            Confirm Password <span>*</span>
          </label>
          <input
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
          />
        </div>
        <div className="btn button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AuthSignUp;
