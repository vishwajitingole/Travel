import "./Auth.css";

function AuthSignUp() {
  const { username, email, password, number } = us;
  function handleNumberChange() {}
  return (
    <div className="auth-container w-[30vw]">
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
            onChange={handleNumberChange}
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
        <div className="btn bg-[#FF6525] mb-2 text-center rounded text-white cta btn-login">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AuthSignUp;
