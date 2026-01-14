import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" py-10 relative ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 h-25 bg-emerald-700 w-200 absolute top-3 left-120">
        
    
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-semibold">
            Your Entire Operation Workflow, Fully Streamlined
          </h1>
        </div>

    
        <div>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
            Contact Us
          </button>
        </div>

      </div>
      <div className="h-110 bg-cyan-950 flex justify-around">
        <div className="pt-30"><p className="text-6xl text-gray-500">Enrollio</p>
        <p className="text-4xl text-amber-50 mt-6">supercharge your Agency Workflow in 30 Minutes</p>
        
        </div>
        <div className="pt-20">
            <ul>
                <li className="text-3xl text-blue-200 mt-4"><Link to="/">Home</Link></li>
                <li className="text-3xl text-blue-200 mt-4"><Link to="/about">About Us</Link> </li>
                <li className="text-3xl text-blue-200 mt-4"><Link to ="/features">Features</Link></li>
                <li className="text-3xl text-blue-200 mt-4"><Link to="/pricing">Pricing</Link></li>
                <li className="text-3xl text-blue-200 mt-4"><Link to ="/contact">Contact us</Link></li>
            </ul>
        </div>
        <div className="pt-30">
            <p className="text-5xl text-center text-orange-50">Social Media</p>
        </div>

      </div>
      <div className="h-10 bg-blue-400 flex justify-between">
        <div><p className="text-2xl text-amber-100 ml-10"> @ 2026 Enrollio All the right reserved </p></div>
        <div className="flex  gap-5 mr-10">
            <li className="list-none text-2xl text-amber-100">Privacy Policy /</li>
            <li className="list-none text-2xl text-amber-100"> Terms and Conditions    /</li>
            <li className="list-none text-2xl text-amber-100">Security</li>
        </div>
      </div>
    </footer>
  );
}
