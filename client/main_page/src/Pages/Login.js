import "./style.css";

const Login = () => {
  return (
    <div className="pages-bg">
      <div class="bf-container">
        <div class="bf-body">
          <div class="bf-head">
            <h1 class="h1">Login Form</h1>
          </div>

          <form class="bf-body-box" action="form.php">
            <div class="bf-row">
              <div class="bf-col-6">
                <p class="p-reservation">Email Address</p>
                <input
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div class="bf-row">
              <div class="bf-col-12">
                <p class="p-reservation">Password</p>
                <input
                  class="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  required
                ></input>
              </div>
            </div>

            <div class="bf-row">
              <div class="bf-col-3">
                <a href="/next" className="submit">
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
