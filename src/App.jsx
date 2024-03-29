import { Link } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <>
      <div className=" text-blue-500 text-center text-xl">
      <Link to='/'>Home</Link>
        <Link to="/login" className="mx-5">
          Login
        </Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/form" className="mx-5">Form</Link>
        <Link to='/products'>All Products</Link>
      </div>
      <AllRoutes />
    </>
  );
}
export default App