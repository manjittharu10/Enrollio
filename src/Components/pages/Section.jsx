import Leadsmanagement from "./Leadsmanagement";
import Rewardmanagement from "./Rewardmanagement";
import Studentcounselling from "./Studentcounselling";
import StudentManagement from "./StudentManagement";

export default function Section() {
  return (<>
    <section className=" bg-blue-100 mt-10 flex justify-center py-20">
      <div className="max-w-6xl w-full bg-amber-100 px-6">


        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-semibold text-orange-400">
            Our Features
          </h1>

          <p className="mt-4 text-4xl font-bold text-cyan-950">
            Ready to streamline your entire consultancy?
          </p>

          <p className="mt-4 text-emerald-900 text-md">
            Streamline every consultancy workflow from leads and applications
            to agencies with one simple, powerful system.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Leadsmanagement />
          <StudentManagement />
          <Rewardmanagement />
          <Studentcounselling />
        </div>

      </div>
      
    </section>
    <div className="flex justify-center">
    <button className="h-10 w-40 bg-blue-400 rounded-3xl hover:bg-blue-800 transition-all">Explore More</button>
    </div>
  </>);
}
