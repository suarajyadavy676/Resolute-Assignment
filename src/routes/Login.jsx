import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <h1 className="text-2xl text-center my-3 font-bold">Login</h1>
        </header>
        <form>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Username
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              required
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <footer>
          <Link
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
            to="#"
          >
            Forgot Password?
          </Link>
          <Link
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
            to="/create-account"
          >
            Create Account
          </Link>
        </footer>
      </div>
    </div>
    </>
  );
}

export default Login;
