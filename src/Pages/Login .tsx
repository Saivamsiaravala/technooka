import { useState } from "react";

function Login({ loginHandler }: { loginHandler: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    if (
      email.toLowerCase() === "aarohi@gmail.com" &&
      password === "Aarohi@123"
    ) {
      loginHandler();
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-div">
      <div className="title">Login</div>
      <form className="form" onSubmit={(e) => formHandler(e)}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            name="email"
            id="email"
            required
            placeholder="aarohi@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Aarohi@123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {error && <div>Entered Wrong Credentails</div>}
    </div>
  );
}

export default Login;
