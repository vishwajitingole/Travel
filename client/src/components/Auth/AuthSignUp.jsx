import "./Auth.css";

function AuthSignUp() {
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
            Name <span>*</span>{" "}
          </label>
          <input placeholder="Enter Name" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Email <span>*</span>{" "}
          </label>
          <input placeholder="Enter Email" type="email" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span>*</span>{" "}
          </label>
          <input placeholder="Enter Password" type="password" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Confirm Password <span>*</span>
          </label>
          <input placeholder="Enter Password" type="password" required />
        </div>
        <div className="">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AuthSignUp;
