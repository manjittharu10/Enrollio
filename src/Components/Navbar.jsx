import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="display flex justify-between gap-20 mt-5 bg-emerald-300/70 h-25">
      <h1 className="text-6xl text-cyan-700 mt-5 ml-9">Enrollio</h1>
   <div >
    <nav className="display flex gap-15 text-3xl text-emerald-900 mt-5">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to ="/features">Features</Link>
      <Link to ="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    </div>
    <div>
    <button className="h-15 w-40 bg-fuchsia-100 mt-5 text-2xl mr-20 text-cyan-950 rounded-b-3xl hover:scale-x-105">Login</button>
    </div>
</div>

  );
}
