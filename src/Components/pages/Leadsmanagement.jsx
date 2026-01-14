import LeadsTable from "./LeadsTable";


export  default function Leadsmanagement() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h1 className="text-xl font-semibold text-cyan-950 mb-2">
        Leads Management
      </h1>

      <p className="text-gray-600 mb-4">
        Capture, nurture, and convert more leads with automated follow-ups and
        real-time insights.
      </p>

      <div className="bg-amber-100 rounded-xl p-4 text-sm text-emerald-900">
   <LeadsTable/>
      </div>

    </div>
  );
}
