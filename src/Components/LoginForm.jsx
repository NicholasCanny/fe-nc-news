function LoginForm({ handleLogin, setUserName, username }) {
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="e.g. jessjelly"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
