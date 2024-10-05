function AuthModal() {
  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal flex items-center shadow-2xl ">
        <button className="button btn-auth">Login</button>
        <button className="button btn-auth">Signup</button>
        <button className="button btn-auth flex items-center justify-center">
          <i className="ri-close-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default AuthModal;
