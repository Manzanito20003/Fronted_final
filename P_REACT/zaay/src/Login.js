function Login() {
  return (
    <form action="">
      <h1 className="title">Login</h1>
      <label>
        <i className="fa-solid fa-user"></i>
        <input placeholder="username" type="text" id="username" />
      </label>
      <label>
        <i className="fa-solid fa-lock"></i>
        <input placeholder="password" type="password" id="password" />
      </label>
      <a href="#" className="link">Forgot your password?</a>
      <button type="submit" className="button">Login</button>
    </form>
  );
}

export default Login;
