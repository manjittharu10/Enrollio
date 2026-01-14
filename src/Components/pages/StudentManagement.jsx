import rec from "../../assets/rec.jpg"

export default function StudentManagement() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center gap-3 mb-3">
    
        <h1 className="text-xl font-semibold text-cyan-950">
          Student Management
        </h1>
      </div>

      <p className="text-gray-600 mb-4">
        Manage every student’s journey from first onboarding to final outcomes.
      </p>

      <div className="bg-blue-100  h-150 rounded-xl p-4 text-sm text-emerald-900 relative">
       <div className="bg-blue-50 h-100 w-100 rounded-full ring-2 ring-black mt-10 ">
         <div className="h-10 w-80 bg-blue-200 z-2 text-2xl text-center absolute top-10 left-30">
        <button className="rounded-xl"> <i class="fa-solid fa-building-columns"></i>University Application</button>
      </div>
       </div>
       <div className="bg-blue-50 h-80 w-80 rounded-full absolute bottom-40 left-8 ring-2 ring-black">
         <div className="h-10 w-80 bg-blue-200 z-2 text-2xl text-center absolute top-25">
        <button className="rounded-xl ml-2"> <i class="fa-solid fa-book" ></i>Document Management</button>
      </div>
       </div>
         <div className="bg-blue-50 h-80 w-80 rounded-full absolute bottom-5 left-2 ring-2 ring-black">
          <div className="h-10 w-80 bg-blue-200 z-2 text-2xl text-center absolute top-25 left-38">
        <button className="rounded-xl"> <i class="fa-brands fa-cc-visa"></i>Visa Application</button>
      </div>
       <div className="h-10 w-80 bg-blue-200 z-2 text-2xl text-center absolute top-45 left-1">
        <button className="rounded-xl"> <i class="fa-brands fa-glide"></i>Expert Guidance</button>
      </div>
         </div>
     
      </div>
      

    </div>
  );
}
